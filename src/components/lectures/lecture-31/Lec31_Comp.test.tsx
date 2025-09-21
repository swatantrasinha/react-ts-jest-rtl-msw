import {render, screen, configure} from '@testing-library/react'
import '@testing-library/jest-dom'
import Lec31_Comp from './Lec31_Comp'

configure({testIdAttribute: 'element-id'})

 test('Lec31 : test - input textbox', () => {
    render(<Lec31_Comp />)
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue()
    expect(input).toHaveValue('abc')
    expect(input).toBeEnabled()
    expect(input).toHaveAttribute('id')
    expect(input).toHaveAttribute('data-test')
    expect(input).toHaveClass('test-style')
    expect(input).toHaveClass('my-custom-style')
 })

  test('Lec31 : test - negavtive cases', () => {
    render(<Lec31_Comp />)
    const btn = screen.getByRole('button')
    expect(btn).toBeInTheDocument()
    expect(btn).not.toHaveClass('btn')
    expect(btn).not.toHaveAttribute('id','abc')
    expect(btn).not.toBeEnabled()
  })







 

