import {render, screen, configure} from '@testing-library/react'
import '@testing-library/jest-dom'
import Lec33_Comp from './Lec33_Comp'

configure({testIdAttribute: 'element-id'})

 test('Lec33 : text match with string', () => {
    render(<Lec33_Comp />)
    const divEle1 = screen.getByText((content) => content.startsWith('Hello'))
    expect(divEle1).toBeInTheDocument()

   const divEle2 = screen.getByText((content) => content.endsWith('World'))
   expect(divEle2).toBeInTheDocument()    

   const divEle3 = screen.getByText((content) => {
      return (content?.length === 11) && content?.includes('lo Wo')
   })
   expect(divEle3).toBeInTheDocument()    

 })

