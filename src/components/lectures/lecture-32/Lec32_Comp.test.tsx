import {render, screen, configure} from '@testing-library/react'
import '@testing-library/jest-dom'
import Lec32_Comp from './Lec32_Comp'

configure({testIdAttribute: 'element-id'})

 test('Lec32 : text match with string', () => {
    render(<Lec32_Comp />)
    const divEle1 = screen.getByText('hello world',{exact: false})
    expect(divEle1).toBeInTheDocument()

    const divEle2 = screen.getByText('hello World',{exact: false})
    expect(divEle2).toBeInTheDocument()

    const divEle3 = screen.getByText('Hello world',{exact: false})
    expect(divEle3).toBeInTheDocument()
    
    const divEle4 = screen.getByText('hello',{exact: false})
    expect(divEle4).toBeInTheDocument()
 })

  test('Lec32 : text match with regex', () => {
    render(<Lec32_Comp />)
    const div1 = screen.getByText(/Hello/)
    expect(div1).toBeInTheDocument()

    const div2 = screen.getByText(/lo Wo/)
    expect(div2).toBeInTheDocument()

    const div3 = screen.getByText(/hello/i)
    expect(div3).toBeInTheDocument()


    const div4 = screen.getByText(/Hello W?orld/i)
    expect(div4).toBeInTheDocument()
  })

