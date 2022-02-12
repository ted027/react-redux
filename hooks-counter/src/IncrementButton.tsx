import * as React from "react"
import { useContext } from "react"
import { CounterContext } from "./App"

const IncrementalButton: React.FC = () => {
    const counterContext = useContext(CounterContext)

    const handlePlus1 = () => {
        counterContext.dispatch({
            type: "increment1",
            payload: { value: 1 }
        })
    }
    const handleMinus1 = () => {
        counterContext.dispatch({
            type: "decrement1",
            payload: { value: 1 }
        })
    }

    const handlePlus2 = () => {
        counterContext.dispatch({
            type: "increment2",
            payload: { value: 1 }
        })
    }
    const handleMinus2 = () => {
        counterContext.dispatch({
            type: "decrement2",
            payload: { value: 1 }
        })
    }

    console.log("IncrementButton Rendered.")
    return (
        <>
            <div>
                <button onClick={handlePlus1}>Count1 +1</button>
                <button onClick={handleMinus1}>Count1 -1</button>
            </div>
            <div>
                <button onClick={handlePlus2}>Count2 +1</button>
                <button onClick={handleMinus2}>Count2 -1</button>
            </div>
        </>
    )
}

export default React.memo(IncrementalButton);