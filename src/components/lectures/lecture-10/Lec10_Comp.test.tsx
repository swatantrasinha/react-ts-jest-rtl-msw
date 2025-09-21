import { fireEvent, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Lec10_Comp from "./Lec10_Comp"


test('Lec-10 : click event testing', () => {
    render(<Lec10_Comp />)
    const btn= screen.getByRole('button')
    fireEvent.click(btn)
    expect(screen.getByText('updated data')).toBeInTheDocument()
})