import React from 'react';

import { cleanup, fireEvent, render, screen} from '@testing-library/react'
import SimpleButton from './SimpleButton';

afterEach(cleanup)

describe('Check name', () => {
    test('check the buttom name', () => {
      const {getByTestId}=render(<SimpleButton name="Click Me"/>)
      const name = getByTestId('simple-button')
      expect(name.textContent).toBe('Click Me')
    })
  })

  describe('checking the button click', () => {
    const handleClick = jest.fn();
   
    it('Checking the click',() => {

    const {getByTestId} = render(<SimpleButton
            onClick={handleClick}
        />)
        expect(getByTestId("simple-button")).toBeTruthy();
    });

    it('checking the function call',() => {
       render(<SimpleButton
        name='Mark as Completed'
            onClick={handleClick}
        />)
        
        fireEvent.click(screen.getByTestId('simple-button'))
        expect(handleClick).toHaveBeenCalledTimes(1);
    })
});