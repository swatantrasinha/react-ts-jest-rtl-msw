import {render, screen, configure} from '@testing-library/react'
import '@testing-library/jest-dom'
import Lec26_Comp from './Lec26_Comp'

configure({testIdAttribute: 'element-id'})

 test('Lec25 : test div with element-id', () => {
    render(<Lec26_Comp />)
    const divEle = screen.getByTestId('test-div')
    expect(divEle).toBeInTheDocument()
 })




 

