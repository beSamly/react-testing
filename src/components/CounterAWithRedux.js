import React from 'react'
import { useSelector } from 'react-redux'

export default function CounterAWithRedux() {
    const counterA = useSelector(state => state.counterReducer.counterA);

    return (
        <div>
            <div>THis is counter A with redux : {counterA}</div>
            {alert("CounterAWithRedux rerendered")}
        </div>
    )
}
