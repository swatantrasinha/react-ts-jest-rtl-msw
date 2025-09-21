import {act, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Lec40_Comp from './Lec40_Comp'
import userEvent from '@testing-library/user-event'

 test('Lec40 : test onChange event with act function', async() => {
   userEvent.setup()
   render(<Lec40_Comp />)
   const ele = screen.getByRole('textbox')
   await act(async() => {
    await userEvent.type(ele, 'xyz')
   }) 
   expect(screen.getByText('xyz')).toBeInTheDocument()
 })

