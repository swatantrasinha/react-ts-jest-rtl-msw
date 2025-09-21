import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Lec06_Comp from "./Lec06_Comp"


test('Testing Lec-06', () => {
    render(<Lec06_Comp />)
    // screen.logTestingPlaygroundURL()
    const checkInput = screen.getByRole('textbox')
    expect(checkInput).toBeInTheDocument()
    const checkInputPlaceholder = screen.getByPlaceholderText('Enter Username')
    expect(checkInputPlaceholder).toBeInTheDocument()
    expect(checkInput).toHaveAttribute('name', 'username')
    expect(checkInput).toHaveAttribute('id', 'user-id')
    expect(checkInput).toHaveAttribute('type', 'text')
  })