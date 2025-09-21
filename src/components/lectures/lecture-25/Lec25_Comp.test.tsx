import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Lec25_Comp from './Lec25_Comp'


 test('Lec25 : getByTestId - div ele testing', () => {
    render(<Lec25_Comp />)
    const divEle = screen.getByTestId('div-test-id')
    expect(divEle).toBeInTheDocument()
 })

  test('Lec25 : getByTestId - h2 ele testing', () => {
    render(<Lec25_Comp />)
    const h2Ele = screen.getByTestId('h2-test-id')
    expect(h2Ele).toBeInTheDocument()
 })

   test('Lec25 : getAllByTestId - multiple para ele testing', () => {
    render(<Lec25_Comp />)
    const paraElements = screen.getAllByTestId('para-test-id')
    for (let i = 0; i < paraElements.length; i++) {
       expect(paraElements[i]).toBeInTheDocument()
    }
 })


 

