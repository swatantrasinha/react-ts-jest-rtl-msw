import {fireEvent, render, screen} from '@testing-library/react'
import Lec09_Comp from "./Lec09_Comp";


test('Lec-09 : onChange event testing', () => {
    render(<Lec09_Comp/>)
    const input:HTMLInputElement= screen.getByRole('textbox')
    fireEvent.change(input, {target:{value:'abc'}})
    expect(input?.value).toBe('abc')
})