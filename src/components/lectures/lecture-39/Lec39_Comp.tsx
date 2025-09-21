import { useState } from "react"

const Lec39_Comp = () => {
    const [name, setName] = useState('')

    
    return (
        <div>
            <h1>Lec 39: onChange Event Testing | Keyboard Interactions</h1>
            <h2>{name}</h2>
            <div>
              <input type="text" onChange={(e) => setName(e?.target?.value)} placeholder="Enter Name" />
            </div>
         </div>
    )
}

export default Lec39_Comp
