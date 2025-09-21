import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Lec21_Comp from './Lec21_Comp'


 test('Lec21 : textbox getByLabelText', () => {
    render(<Lec21_Comp />)
    const input = screen.getByLabelText('Username')
    expect(input).toBeInTheDocument()    
    expect(input).toHaveValue('abc')    
 })


  test('Lec21 : checkbox getByLabelText', () => {
    render(<Lec21_Comp />)
    const checkbox = screen.getByLabelText('Skills')
    expect(checkbox).toBeInTheDocument()    
    expect(checkbox).toBeChecked()   
 })