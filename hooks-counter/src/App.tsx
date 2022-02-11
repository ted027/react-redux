import * as React from "react"
import { useState, useEffect, createContext, useReducer, useCallback } from 'react';
import Count from "./Countdisplay";
import IncrementButton from "./IncrementButton"
import NmaeInput from "./NameInput"
import logo from './logo.svg';
import './App.css';

type State = {
  count: number,
  hit: number
}

export const CounterContext = createContext(undefined as any)

const initialState: State = {
  count: 0,
  hit: 0
}

const reducer = (state: State, action: any) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload.value, hit: state.hit + action.payload.value }
    case 'decrement':
      return { ...state, count: state.count - action.payload.value, hit: state.hit + action.payload.value}
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
          <Count/>
          <IncrementButton />
        </CounterContext.Provider>
        <h1>Name: {name}</h1>
        <NmaeInput handleInput={handleInput} />

      </header>
    </div>
  );
}

export default App;
