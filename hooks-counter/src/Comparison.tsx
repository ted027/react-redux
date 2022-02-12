import * as React from "react"
import { useContext, useMemo } from "react"
import { CounterContext } from "./App"

const Comparison: React.FC = () => {
    const { state } = useContext(CounterContext)

    const isCount1BiggerThan = useMemo(() => {
        console.log("Do something heavy.")
        return state.count1
    }, [state.count1])

    console.log("Comparison Rendered.")
    return (
        <div>
            <h2>count1は0より{isCount1BiggerThan ? "大きい" : "大きくない"}</h2>
        </div>
    )
}

export default React.memo(Comparison);