import { useState } from "react"

const Lec38_Comp = () => {
    const [data, setData] = useState('')

    
    return (
        <div>
            <h1>Lec38 : Click Event with User Event Library</h1>
            <h2>{data}</h2>
            <div >
               <button onClick={() => setData('Hello')}>Click Me</button>
            </div>
         </div>
    )
}

export default Lec38_Comp
