import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect, useCallback } from 'react'
import { incrementCounterA } from '../actions'

export default function useCounterA() {
    const counterA = useSelector(state => state.counterReducer.counterA);
    const dispatch = useDispatch();




    const dispatchIncrementCounterA = useCallback(() => {
        dispatch(incrementCounterA())

    }, [])

    useEffect(() => {
        // products 조회 로직 ...
        alert("User counter A loaded")
        console.log("counter A: ", counterA)
    }, [dispatch])

    return { counterA, dispatchIncrementCounterA };
}
