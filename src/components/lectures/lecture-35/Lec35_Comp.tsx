import { useEffect, useState } from "react"

const Lec35_Comp = () => {
    const [data, setData]= useState(false)

    useEffect(() => {
        setTimeout(() => {
            setData(true)
        }, 3000);
    }, [])
    
    return (
        <div>
            <h1>Lec35:findBy and findAllBy | test async elements</h1>
            {data ? (<div>Data Found</div>): (<div>Data Not Found</div>)}
         </div>
    )
}

export default Lec35_Comp
