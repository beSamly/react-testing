import React, { useContext } from 'react'
import { TodosContext } from "../context/TodosContextProvider";

export default function ComponentA() {

    const { state } = useContext(TodosContext);

    return (
        <div>
            {/* {alert("component A rerendered")} */}
            <div>This is component A</div>
            <div>Component A counter is :{state.componentACounter}</div>
        </div >
    )
}
