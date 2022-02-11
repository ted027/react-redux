import * as React from "react"

type Props = {
    handleInput: (e:any) => void;
}

const NameInput: React.FC<Props> = ({ handleInput }) => {
    console.log("NameInput Rendered.")
    return (
        <input onChange={handleInput} />
    )
}

export default React.memo(NameInput);