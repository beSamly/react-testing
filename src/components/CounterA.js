import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useCounterA from "../hooks/UseCounterA"

export default function CounterA() {

    const { counterA } = useCounterA()

    return (
        <div>
            <div>THis is counter A : {counterA}</div>
            {/* {alert("CounterA rerendered")} */}
        </div>
    )
}
