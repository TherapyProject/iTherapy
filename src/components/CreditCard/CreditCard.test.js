import { render, screen } from '@testing-library/react';
import React from 'react';
import CreditCard from './CreditCard';

describe('CreditCard', () => {
  it('renders the card image', () => {
    const pic = 'https://example.com/card.jpg';
    render(<CreditCard pic={pic} />);

    const img = screen.getByAltText('Cards');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', pic);
  });

  it('renders the select button', () => {
    render(<CreditCard />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Select');
    expect(button).toHaveClass('btn-info');
  });
});
