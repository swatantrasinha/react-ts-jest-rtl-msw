import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Lec24_Comp from './Lec24_Comp'


 test('Lec24 : getByText - single button testing', () => {
    render(<Lec24_Comp />)
    const btn = screen.getByText('Login')
    expect(btn).toBeInTheDocument()
 })

  test('Lec24 : getByText - single p tag testing', () => {
    render(<Lec24_Comp />)
    const paraTag = screen.getByText('para tag testing')
    expect(paraTag).toBeInTheDocument() 
    expect(paraTag).toHaveClass('para-cls') 
    expect(paraTag).toHaveAttribute('id') // check if attribute exists
    expect(paraTag).toHaveAttribute('id','p1') // // check if attribute exists with specific value
 })

  test('Lec24 : getByText - h1_Tag testing', () => {
    render(<Lec24_Comp />)
    const h1Tag = screen.getByText('RTL Query : getByText and getAllByText')
    expect(h1Tag).toBeInTheDocument() 
 })

   test('Lec24 : getAllByText - h2_Tags testing', () => {
    render(<Lec24_Comp />)
    const h2Tags = screen.getAllByText('Heading Level 2')
    for (let i = 0; i < h2Tags.length; i++) {
      expect(h2Tags[i]).toBeInTheDocument() 
    }
 })
 

