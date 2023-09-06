import axios from "axios";
import { ReactNode, createContext, useEffect, useState } from "react";


interface AuthContextType {
  currentUser: string | null;
  login: (inputs: LoginInputs) => Promise<void>;
}

//proporciona un valor inicial para el contexto en caso de que no haya un usuario almacenado en el almacenamiento local.
const initialContextValue: AuthContextType = {
  currentUser: null,
  login: async () => {},
};

interface LoginInputs {
  email: string;
  password: string;
}


export const AuthContext = createContext(initialContextValue);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const storedUser = localStorage.getItem("user");
  const [currentUser, setCurrentUser] = useState<string | null>(
    typeof storedUser === "string" ? JSON.parse(storedUser) : null
  );


  const login = async ( inputs:LoginInputs ) => {
    const res = await axios.post("http://localhost:8800/apiForum/auth/login", inputs, {
      withCredentials: true,
    });

    setCurrentUser(res.data)
  };

  useEffect(() => {
    // Verifica si currentUser no es nulo antes de guardarlo en el almacenamiento local
    if (currentUser !== null) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  const contextValue: AuthContextType = {
    currentUser,
    login,
  };


  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};