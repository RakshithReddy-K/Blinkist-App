import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import SearchIcon from './SearchIcon'

afterEach(cleanup)

describe('render check',()=>test('check rendering',()=>{
    render(<SearchIcon/>)
    const icon=screen.getByTestId('search-icon');
    expect(icon).toBeInTheDocument()
})
)