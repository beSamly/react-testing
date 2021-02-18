import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function CounterBWithRedux() {
    const counterB = useSelector(state => state.counterReducer.counterB);

    return (
        <div>
            <div>THis is counter B with redux : {counterB}</div>
            {alert("CounterBWithRedux rerendered")}
        </div>
    )
}
