import {render, screen, configure} from '@testing-library/react'
import '@testing-library/jest-dom'
import Lec28_Comp from './Lec28_Comp'

configure({testIdAttribute: 'element-id'})

 test('Lec28 : button- testing with getByTitle', () => {
    render(<Lec28_Comp />)
    const btnEle = screen.getByTitle('click to open')
    expect(btnEle).toBeInTheDocument()
 })

  test('Lec28 : span- testing with getByTitle', () => {
    render(<Lec28_Comp />)
    const spanEle = screen.getByTitle('black spade suit')
    expect(spanEle).toBeInTheDocument()
 })

   test('Lec28 : span elements - testing with getAllByTitle', () => {
    render(<Lec28_Comp />)
    const spanList = screen.getAllByTitle('black star')
    for (let i = 0; i < spanList.length; i++) {
      expect(spanList[i]).toBeInTheDocument()
    }
   })






 

