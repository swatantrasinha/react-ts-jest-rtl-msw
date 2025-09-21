import { useState } from "react"

const Lec43_Comp = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <h1>Lec 43: Debugging in React testing library</h1>
            <div>
                <button onClick={() => setCounter(counter + 1)}>Click to increase: {counter}</button>
            </div>
            <h2>Heading 2</h2>
            <h5>Heading 5</h5>
        </div>
    )
}
export default Lec43_Comp
