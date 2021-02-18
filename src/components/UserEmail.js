import React, { useContext } from "react";
import { UserContext } from "../context/UserContextProvider"

export default function UserEmail() {

    const { email } = useContext(UserContext);

    return (
        <div>
            <div>User email component : {email} </div>
            {/* {alert("User eamil component rerendered")} */}
        </div>
    )
}
