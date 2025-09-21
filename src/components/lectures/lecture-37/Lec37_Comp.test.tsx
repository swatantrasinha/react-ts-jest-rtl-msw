import {render, screen, within} from '@testing-library/react'
import '@testing-library/jest-dom'
import Lec37_Comp from './Lec37_Comp'

 test('Lec37 : test case with custom query within elements', async() => {
    render(<Lec37_Comp />)
    const el = screen.getByText('Hello World')
    expect(el).toBeInTheDocument()
    const subEl = within(el).getByText('Hi')
    expect(subEl).toBeInTheDocument()
 })

