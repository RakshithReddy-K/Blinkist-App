import { cleanup,render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import SearchBar from './SearchBar'
afterEach(cleanup)

describe('Search',()=>test('check rendering',()=>{
    render(<SearchBar/>)
    const search=screen.getByTestId('search-bar');
    expect(search).toBeInTheDocument()
})
)
describe('Searching',()=>{
test("check on change calllback",async ()=>
{
    const onChange=jest.fn()
    render(<SearchBar onChange={onChange}/>)
    await userEvent.type(screen.getByRole('searchbox'), 'hello');
    expect(onChange).toHaveBeenCalledTimes(5);
})
})
