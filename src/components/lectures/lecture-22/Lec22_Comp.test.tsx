import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Lec22_Comp from './Lec22_Comp'


 test('Lec22 : textbox getAllByLabelText', () => {
    render(<Lec22_Comp />)
    const inputs = screen.getAllByLabelText('Username')
    for (let i = 0; i < inputs.length; i++) {
        expect(inputs[i]).toBeInTheDocument()
    }
 })


  test('Lec22 : checkbox getAllByLabelText', () => {
    render(<Lec22_Comp />)
     const checkboxes = screen.getAllByLabelText('Skills')
    for (let i = 0; i < checkboxes.length; i++) {
        expect(checkboxes[i]).toBeInTheDocument()    
        expect(checkboxes[i]).toBeChecked() 
    }
 })


