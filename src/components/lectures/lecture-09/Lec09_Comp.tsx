import { useState } from 'react'

const Lec09_Comp = () => {
    const [data, setData] = useState("")
  return (
    <div>
        <h1>Test onChange Event with Input Textbox</h1>
        <div>
            <input type="text" value={data} onChange={(e) => setData(e?.target?.value)} />
        </div>
    </div>
  )
}
export default Lec09_Comp
