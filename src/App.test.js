import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import App from './App';
import Shop from './components/Shop';

describe('Shop component', () => {
  it('Cart quantity updates', () => {
    render(<Shop />);
    const button = screen.getByRole('button', { name: 'Add item' });

    act(() => {
      userEvent.click(button);
    });

    expect(screen.getByTestId('basket').textContent).toMatch('1')
  })
})
