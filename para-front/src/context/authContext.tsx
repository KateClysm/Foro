import axios from "axios";
import { ReactNode, createContext, useEffect, useState } from "react";
import { IUser } from "../models/IUsers";

interface LoginInputs {
  email: string;
  password: string;
}
interface AuthContextType {
  currentUser: IUser | null;
  login: (inputs: LoginInputs) => Promise<void>;
  logout: () => Promise<void>;
}
//proporciona un valor inicial para el contexto en caso de que no haya un usuario almacenado en el almacenamiento local.
const initialContextValue: AuthContextType = {
  currentUser: null,
  login: async () => {},
  logout: async () => {},
};


export const AuthContext = createContext(initialContextValue);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const storedUser = localStorage.getItem("user");
  const [currentUser, setCurrentUser] = useState<IUser | null>(
    typeof storedUser === "string" ? JSON.parse(storedUser) : null
  );

  const login = async ( inputs:LoginInputs ) => {
    const res = await axios.post("http://localhost:8800/apiForum/auth/login", inputs, {
      withCredentials: true,
    });
    setCurrentUser(res.data);
  };

  const logout = async () => {
    await axios.post("http://localhost:8800/apiForum/auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    if (currentUser !== null) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  const contextValue: AuthContextType = {
    currentUser,
    login,
    logout
  };


  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};