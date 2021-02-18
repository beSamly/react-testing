import React, { useContext } from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import { TodosContext } from '../context/TodosContextProvider'

export default function ComponentPage() {

    const { state, setState } = useContext(TodosContext);


    return (
        <div>
            <button onClick={() => setState({ ...state, componentACounter: state.componentACounter + 1 })}>Increate component A counter</button>
            <button onClick={() => setState({ ...state, componentBCounter: state.componentBCounter + 1 })}>Increate component B counter</button>
            <ComponentA />
            <ComponentB />
        </div>
    )
}
