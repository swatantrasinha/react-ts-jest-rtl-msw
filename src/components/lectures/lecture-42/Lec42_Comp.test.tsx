import { render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Lec42_Comp from './Lec42_Comp'
import userEvent from '@testing-library/user-event'

// @ts-ignore
global.jest = jest

 test('Lec42 : test onChange event with act function', async() => {
  const testFunc = jest.fn()
  userEvent.setup()
   render(<Lec42_Comp testFunc={testFunc}/>)
   const btn = screen.getByRole('button')
   await userEvent.click(btn)
   expect(testFunc).toBeCalled()
 })

