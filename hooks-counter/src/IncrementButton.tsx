import * as React from "react"
import { useContext } from "react"
import { CounterContext } from "./App"

const IncrementalButton: React.FC = () => {
    const counterContext = useContext(CounterContext)

    const handlePlus = () => {
        counterContext.dispatch({
            type: "increment",
            payload: { value: 1 }
        })
    }
    const handleMinus = () => {
        counterContext.dispatch({
            type: "decrement",
            payload: { value: 1 }
        })
    }

    console.log("IncrementButton Rendered.")
    return (
        <div>
            <button onClick={handlePlus}>Count +1</button>
            <button onClick={handleMinus}>Count -1</button>
        </div>
    )
}

export default React.memo(IncrementalButton);