import React, { useContext } from "react";
import { UserContext, UserUpdateContext } from "../context/UserContextProvider"

export default function UserName() {

    const { name, email } = useContext(UserContext);
    const setUser = useContext(UserUpdateContext);

    return (
        <div>
            <div>User name component : {name} </div>
            <button onClick={() => setUser({email, name: "Jamie lee" })}>Update user name</button>
            {/* {alert("User name component rerendered")} */}
        </div>
    )
}
