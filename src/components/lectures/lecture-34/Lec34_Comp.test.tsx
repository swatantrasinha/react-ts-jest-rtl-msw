import {render, screen, configure} from '@testing-library/react'
import '@testing-library/jest-dom'
import Lec34_Comp from './Lec34_Comp'

 test('Lec34 : queryBy test case', () => {
    render(<Lec34_Comp />)
    const div1 = screen.getByText('Login')
    expect(div1).toBeInTheDocument()

   
   //  const div2 = screen.getByText('Logout')
   //  expect(div2).toBeInTheDocument()
   /* This will fail because in Lec34_Comp.tsx, isLogin is false
   so Logout button will not be rendered
   To solve this we will use "queryBy" approach  */   

   const div2 = screen.queryByText('Logout')
   expect(div2).not.toBeInTheDocument()

    /* Note: if we try .not.toBeInTheDocument()
    with getBy, it will not work 
   // const div3 = screen.getByText('Logout')
   // expect(div3).not.toBeInTheDocument()
   */ 


 })

