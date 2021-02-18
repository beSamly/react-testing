import React, { createContext, useState, useContext } from "react";

export const UserContext = createContext(null);
export const UserUpdateContext = createContext(null);

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({ email: "besamly2018@gmail.com", name: "sam lee" });

    return (
        <UserContext.Provider value={user}>
            <UserUpdateContext.Provider value={setUser}>
                {children}
            </UserUpdateContext.Provider>
        </UserContext.Provider>
    );
}