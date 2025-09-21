import {render, screen, configure} from '@testing-library/react'
import '@testing-library/jest-dom'
import Lec35_Comp from './Lec35_Comp'

 test('Lec35 : findBy test case', async() => {
    render(<Lec35_Comp />)
    // this will fail
    /*
    const dataFoundEle = screen.getByText('Data Found')
    expect(dataFoundEle).toBeInTheDocument()
    */

     // this will also fail
    /*
    const dataFoundEle = screen.queryByText('Data Found')
    expect(dataFoundEle).toBeInTheDocument()
    */

    const dataFoundEle = await screen.findByText('Data Found',{}, {timeout: 4000})
    expect(dataFoundEle).toBeInTheDocument()

 })

