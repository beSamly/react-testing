import React, { useContext } from 'react'
import { TodosContext } from "../context/TodosContextProvider";

export default function ComponentB() {
    const { state } = useContext(TodosContext);

    return (
        <div>
            {/* {alert("component B rerendered")} */}
            <div>This is component B</div>
            <div>Component B counter is :{state.componentBCounter}</div>
        </div>
    )
}
