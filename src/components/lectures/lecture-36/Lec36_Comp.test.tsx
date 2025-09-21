import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import Lec36_Comp from './Lec36_Comp'

 test('Lec36 : test case with custom query', async() => {
    render(<Lec36_Comp />)
    const ele = document.querySelector('#test-id')
    expect(ele).toBeInTheDocument()
    expect(ele).toHaveTextContent('Hello World')
 })

