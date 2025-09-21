import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Lec23_Comp from './Lec23_Comp'


 test('Lec23 : textbox getByPlaceholderText', () => {
    render(<Lec23_Comp />)
    const input = screen.getByPlaceholderText('enter username')
    expect(input).toBeInTheDocument() 
    expect(input).toHaveValue('abc') 
 })


  test('Lec23 : textbox getAllByPlaceholderText', () => {
    render(<Lec23_Comp />)
    const inputs = screen.getAllByPlaceholderText('enter name')
    for (let i = 0; i < inputs.length; i++) {
        expect(inputs[i]).toBeInTheDocument() 
        expect(inputs[i]).toHaveValue('xyz') 
    }
 })