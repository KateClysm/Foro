interface Iuser { //tiene que ser igual a lo que está definido en la base de datos
    id: number;
    username: string;
    email: string;
    password: string;
    name: string;
    profilePic: string;
    city: string;
    website: string;
};

export default Iuser;