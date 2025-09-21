import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Lec19_Comp from './Lec19_Comp'


 test('Lec19 : getByRole testing  ', () => {
    render(<Lec19_Comp />)
    const btn1= screen.getByRole("button", {name: "Click 1"})
    const btn2= screen.getByRole("button", {name: "Click 2"})

    const input1= screen.getByRole("textbox", {name: "User Name"})
    const input2= screen.getByRole("textbox", {name: "User Age"})

    // const dv1= screen.getByRole("div")
    const dv1= screen.getByRole("dummy")

    expect(btn1).toBeInTheDocument()
    expect(btn2).toBeInTheDocument()
    expect(input1).toBeInTheDocument()
    expect(input2).toBeInTheDocument()

    expect(dv1).toBeInTheDocument()
 })
