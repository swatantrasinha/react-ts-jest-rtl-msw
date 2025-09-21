import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Lec20_Comp from './Lec20_Comp'


 test('Lec20 : getAllByRole testing  ', () => {
    render(<Lec20_Comp />)
    const btns = screen.getAllByRole('button')

    for(let i=0; i<btns.length; i++){
        expect(btns[i]).toBeInTheDocument()
    }

    const options= screen.getAllByRole('option')
    for(let i=0; i<options.length; i++){
        expect(options[i]).toBeInTheDocument()
    }
 })