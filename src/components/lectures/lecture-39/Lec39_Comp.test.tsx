import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Lec39_Comp from './Lec39_Comp'
import userEvent from '@testing-library/user-event'

 test('Lec39: test onChange event with user-event library', async() => {
   userEvent.setup()
   render(<Lec39_Comp />)
   const ele = screen.getByRole('textbox')
   await userEvent.type(ele, 'abc')
   expect(screen.getByText('abc')).toBeInTheDocument()
 })

