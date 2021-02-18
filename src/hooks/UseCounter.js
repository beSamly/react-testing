// import { useSelector, useDispatch } from 'react-redux'
// import { useState, useEffect } from 'react'
// import { incrementCounterA, incrementCounterB } from '../actions'

// export default function useCounter() {
//     const counterA = useSelector(state => state.counterReducer.counterA);
//     const counterB = useSelector(state => state.counterReducer.counterB);
//     const dispatch = useDispatch();

//     const dispatchIncrementCounterA = () => {
//         dispatch(incrementCounterA())
//     }

//     const dispatchIncrementCounterB = () => {
//         dispatch(incrementCounterB())
//     }

//     useEffect(async () => {
//         // products 조회 로직 ...
//         alert("User counter loaded")
//         console.log("counter A: ", counterA)
//         console.log("counter B: ", counterB)
//     }, [])

//     return { counterA, counterB, dispatchIncrementCounterA, dispatchIncrementCounterB };
// }
