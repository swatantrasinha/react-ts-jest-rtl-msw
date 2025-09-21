import { logRoles, prettyDOM, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Lec43_Comp from './Lec43_Comp'

 test('Lec43 : test component', () => {

  // 1. automatic debugging
  /*
  render(<Lec43_Comp />)
  // const el= screen.getByText('Heading 2')
  const el= screen.getByText('Heading 3') // made mistake here 
  expect(el).toBeInTheDocument()
  // Once "npm run test Lec43_Comp.test.tsx"  is executed it will show mismatched location in red 
  */

  // 2. prettyDOM
  
  const {container} = render(<Lec43_Comp />)
  console.log(prettyDOM(container)) 
  

  // 3. debug
  /*
  const {debug} = render(<Lec43_Comp />)
  debug()
  */

 // 4. DEBUG_PRINT_LIMIT
  /*
  render(<Lec43_Comp />)
  const el= screen.getByText('Heading 2')
  expect(el).toBeInTheDocument()
  // give command : DEBUG_PRINT_LIMIT=10000 npm run test Lec43_Comp.test.tsx 
  */

  

  // 5. logRoles
  /*
  const {container} = render(<Lec43_Comp />)
  logRoles(container)
  */
 })

