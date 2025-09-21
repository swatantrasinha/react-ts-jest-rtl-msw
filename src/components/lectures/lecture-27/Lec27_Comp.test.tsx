import {render, screen, configure} from '@testing-library/react'
import '@testing-library/jest-dom'
import Lec27_Comp from './Lec27_Comp'

configure({testIdAttribute: 'element-id'})

 test('Lec27 : textbox- testing using getByDisplayValue', () => {
    render(<Lec27_Comp />)
    const inputEle = screen.getByDisplayValue('abc')
    expect(inputEle).toBeInTheDocument()
 })

test('Lec27 : textArea - testing using getByDisplayValue', () => {
    render(<Lec27_Comp />)
     const textAreaEle = screen.getByDisplayValue('hello world')
    expect(textAreaEle).toBeInTheDocument()
 })

 test('Lec27 : radioButton - testing using getByDisplayValue', () => {
    render(<Lec27_Comp />)
     const radioBtnEle = screen.getByDisplayValue('male')
    expect(radioBtnEle).toBeInTheDocument()
 })

  test('Lec27 : textbox- testing using getAllByDisplayValue', () => {
    render(<Lec27_Comp />)
    const inputList = screen.getAllByDisplayValue('enter query')
    for (let i = 0; i < inputList.length; i++) {
        expect(inputList[i]).toBeInTheDocument()
    }
 })




 

