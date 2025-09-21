import { useState } from "react"

const Lec40_Comp = () => {
    const [name, setName] = useState('')

    
    return (
        <div>
            <h1>Lec 40 : act functions</h1>
            <h2>{name}</h2>
            <div>
              <input type="text" onChange={(e) => setName(e?.target?.value)} placeholder="Enter Name" />
            </div>
         </div>
    )
}

export default Lec40_Comp
