import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Lec41_User_Comp from './Lec41_User_Comp'

 test('Lec41 : Props Testing', () => {
  const name= 'swatantra'
   render(<Lec41_User_Comp name={name} />)
   const userName = screen.getByText(`Username is:${name}`)
   expect(userName).toBeInTheDocument()
 })

