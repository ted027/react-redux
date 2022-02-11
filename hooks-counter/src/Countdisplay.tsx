import * as React from "react"
import { useContext } from "react"
import { CounterContext } from "./App"

function Count() {
    const { state } = useContext(CounterContext)
    console.log("CountDisplay Rendered.")
    return (
        <div>
            <h1>Count: {state.count}</h1>
            <h2>Hit: {state.hit}</h2>
        </div>
    );
}

export default React.memo(Count);