import React from 'react'
import useCounterA from "../hooks/UseCounterA"
import useCounterB from "../hooks/UseCounterB"
import CounterA from './CounterA'
import CounterB from './CounterB'
import CounterBWithRedux from './CounterBWithRedux'
import CounterAWithRedux from './CounterAWithRedux'
import { incrementCounterA, incrementCounterB } from "../actions"
import { useDispatch } from 'react-redux'

export default function CounterPage() {

    const { dispatchIncrementCounterA } = useCounterA()
    // const { dispatchIncrementCounterB } = useCounterB()

    const dispatch = useDispatch()

    return (
        <div>
            {alert("CounterPage rerendered")}

            {/*Testing with custom hook with redux */}
            {/* <button onClick={() => dispatchIncrementCounterA()}>Increate counter A</button> */}
            {/* <button onClick={() => dispatchIncrementCounterB()}>Increate counter B</button> */}


            <CounterA />
            <CounterB />

            <br />
            {/* Testing with pure redux */}
            <button onClick={() => dispatch(incrementCounterA())}>Increate counter A</button>
            {/* <button onClick={() => dispatch(incrementCounterB())}>Increate counter B</button> */}
            {/* <CounterAWithRedux /> */}
            {/* <CounterBWithRedux /> */}
        </div>
    )
}


