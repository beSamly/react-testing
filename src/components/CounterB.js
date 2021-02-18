import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useCounterB from "../hooks/UseCounterB"

export default function CounterB() {

    const { counterB } = useCounterB()

    return (
        <div>
            <div>THis is counter B : {counterB}</div>
            {/* {alert("CounterB rerendered")} */}
        </div>
    )
}


