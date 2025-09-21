import { sum } from "./sum";

test('testing for sum function', () => {
    const input1= 2
    const input2= 3
    const output= 5
    expect(sum(input1, input2)).toBe(output)   
})