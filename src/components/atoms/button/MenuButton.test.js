
import React from 'react';

import { cleanup, fireEvent, render, screen} from '@testing-library/react'
import MenuButton from './MenuButton';

afterEach(cleanup)

describe('App', () => {
    test('check the buttom name', () => {
      const {getByTestId}=render(<MenuButton name="Click Me"/>)
      const name = getByTestId('menubutton')
      expect(name.textContent).toBe('Click Me')
    })
  })

  describe('checking the button click', () => {
    const handleClick = jest.fn();
   
    it('Checking the click',() => {

    const {getByTestId} = render(<MenuButton
            onClick={handleClick}
        />)
        expect(getByTestId("menubutton")).toBeTruthy();
    });

    it('checking the function call',() => {
       render(<MenuButton
        name='My Library'
            onClick={handleClick}
        />)
        fireEvent.click(screen.getByText('My Library'))
        expect(handleClick).toHaveBeenCalledTimes(1);
    })
});