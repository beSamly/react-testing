import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { incrementCounterB } from '../actions'

export default function useCounterB() {
    const counterB = useSelector(state => state.counterReducer.counterB);
    const dispatch = useDispatch();

    const dispatchIncrementCounterB = () => {
        dispatch(incrementCounterB())
    }

    useEffect(() => {
        // products 조회 로직 ...
        alert("User counter B loaded")
        console.log("counter B: ", counterB)
    }, [dispatch])

    return { counterB, dispatchIncrementCounterB };
}
