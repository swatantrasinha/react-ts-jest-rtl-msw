import { useState } from 'react'

const Lec10_Comp = () => {
    const [data, setdata] = useState("")
  return (
    <div>
        <h1>Test click Event with Button</h1>
        <div>
            <button onClick={() => setdata('updated data')}>Update Data</button>
        </div>
        {data && (<h2>{data}</h2>)}
    </div>
  )
}
export default Lec10_Comp
