import {render, screen, configure} from '@testing-library/react'
import '@testing-library/jest-dom'
import Lec29_Comp from './Lec29_Comp'

configure({testIdAttribute: 'element-id'})

 test('Lec29 : image - testing with getByAltText', () => {
    render(<Lec29_Comp />)
    const imgEle = screen.getByAltText('dummy image')
    expect(imgEle).toBeInTheDocument()
 })


  test('Lec29 : images - testing with getAllByAltText', () => {
    render(<Lec29_Comp />)
    const imagesList = screen.getAllByAltText('dummy image')
    for (let i = 0; i < imagesList.length; i++) {
      expect(imagesList[i]).toBeInTheDocument()
    }
    
 })





 

