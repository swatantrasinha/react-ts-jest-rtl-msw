import { useState } from 'react'
import handleOtherMethod from './helper_lec16'

const Lec16_Comp = () => {
    const [data, setData] = useState("")

    const handleTestData = () => {
        setData('hello')
    }

  return (
    <div>
        <h1> Functional Component Method Testing</h1>
        <button data-testid="btn1" onClick={handleTestData}>Update</button>
        <button onClick={handleOtherMethod}>Print</button>
        <h2>{data}</h2>
    </div>
  )
}

export default Lec16_Comp
