import * as React from "react"
import { useContext } from "react"
import { CounterContext } from "./App"

function Count() {
    const { state } = useContext(CounterContext)
    console.log("CountDisplay Rendered.")
    return (
        <div>
            <h2>Count1: {state.count1}</h2>
            <h2>Count2: {state.count2}</h2>
            <h3>Hit: {state.hit}</h3>
        </div>
    );
}

export default React.memo(Count);