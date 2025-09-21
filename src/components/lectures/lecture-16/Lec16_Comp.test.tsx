import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Lec16_Comp from './Lec16_Comp'
import handleOtherMethod from './helper_lec16'

test('Lec16 : method testing case 1', () => {
    render(<Lec16_Comp />)
    const btn = screen.getByTestId('btn1')
    fireEvent.click(btn)
    expect(screen.getByText('hello')).toBeInTheDocument()
})

test('method testing case 2', () => {
    expect(handleOtherMethod()).toMatch("hi")
})
