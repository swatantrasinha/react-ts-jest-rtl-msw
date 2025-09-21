import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Lec05_Comp from "./Lec05_Comp"


test('Testing Lec-05', () => {
    render(<Lec05_Comp />)
    // screen.logTestingPlaygroundURL()
    const requiredText = screen.getByText(/First React Test Case/i)
    const imgTitle = screen.getByTitle('butterfly')
    expect(requiredText).toBeInTheDocument()
    expect(imgTitle).toBeInTheDocument()
  })