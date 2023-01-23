import { render, screen } from '@testing-library/react';
import React from 'react';
import PurchaseCard from './PurchaseCard';

describe('PurchaseCard', () => {
  test('renders the title', () => {
    render(<PurchaseCard title="Test Title" price={100} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  test('renders the price', () => {
    render(<PurchaseCard title="Test Title" price={100} />);
    expect(screen.getByText('100$')).toBeInTheDocument();
  });

  test('renders the purchase button', () => {
    render(<PurchaseCard title="Test Title" price={100} />);
    expect(screen.getByText('PURCHASE')).toBeInTheDocument();
  });
});
