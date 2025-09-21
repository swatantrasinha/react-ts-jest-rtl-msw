import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Lec38_Comp from './Lec38_Comp'
import userEvent from '@testing-library/user-event'

 test('Lec38 : test click event with user-event library', async() => {
   userEvent.setup()
   render(<Lec38_Comp />)
   const btn = screen.getByText('Click Me')
   await userEvent.click(btn)
   expect(screen.getByText('Hello')).toBeInTheDocument()
 })

