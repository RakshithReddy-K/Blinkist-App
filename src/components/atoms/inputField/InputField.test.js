import { cleanup,fireEvent,render, screen } from '@testing-library/react'
import React from 'react'
import InputField from './InputField'

afterEach(cleanup)

describe('render check',()=>test('check rendering',()=>{
    render(<InputField label="title"/>)
    const input=screen.getByTestId('input-field');
    expect(input).toBeInTheDocument()
})
)
describe('InputField',()=>{
test("check on change calllback",()=>
{
    const onChange=jest.fn()
    render(<InputField value="" onChange={onChange}/>)
    fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'The' },
      });
   
      expect(onChange).toHaveBeenCalledTimes(1);
})
})
