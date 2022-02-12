import * as React from "react"
import { useState, useEffect, createContext, useReducer, useCallback } from 'react';
import Count from "./Countdisplay";
import IncrementButton from "./IncrementButton"
import Comparison from "./Comparison"
import NameInput from "./NameInput"
import logo from './logo.svg';
import './App.css';

type State = {
  count1: number,
  count2: number,
  hit: number
}

export const CounterContext = createContext(undefined as any)

const initialState: State = {
  count1: 0,
  count2: 0,
  hit: 0
}

const reducer = (state: State, action: any) => {
  switch (action.type) {
    case 'increment1':
      return { ...state, count1: state.count1 + action.payload.value, hit: state.hit + action.payload.value }
    case 'decrement1':
      return { ...state, count1: state.count1 - action.payload.value, hit: state.hit + action.payload.value}
    case 'increment2':
      return { ...state, count2: state.count2 + action.payload.value, hit: state.hit + action.payload.value }
    case 'decrement2':
      return { ...state, count2: state.count2 - action.payload.value, hit: state.hit + action.payload.value}
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [name, setName] = useState("")

  console.log("App Rendered.")
  
  const handleInput = useCallback((e:any) => {
    setName(e.target.value)
  }, [name])

  // useEffect(() => {
  //   console.log("useEffect Executed!")
  // }, [state.hit])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <CounterContext.Provider value={{ state, dispatch }}>
          <Comparison/>
          <Count/>
          <IncrementButton />
        </CounterContext.Provider>
        <h1>Name: {name}</h1>
        <NameInput handleInput={handleInput} />

      </header>
    </div>
  );
}

export default App;
