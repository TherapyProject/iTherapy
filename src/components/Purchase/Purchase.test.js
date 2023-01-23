import { render, screen } from '@testing-library/react';
import React from 'react';
import Purchase from './Purchase';

describe('Purchase', () => {
  it('renders the correct title and subtitle', () => {
    render(<Purchase />);
    expect(
      screen.getByText(
        /PURCHASE TICKETS THAT CAN BE USED TO BOOK APPOINTMENTS!/i
      )
    ).toBeInTheDocument();
  });

  it('renders three purchase cards', () => {
    render(<Purchase />);
    expect(screen.getAllByRole('button', { name: /PURCHASE/i }).length).toEqual(
      3
    );
    expect(screen.getByText(/1 TICKET/i)).toBeInTheDocument();
    expect(screen.getByText(/5 TICKETS/i)).toBeInTheDocument();
    expect(screen.getByText(/10 TICKETS/i)).toBeInTheDocument();
  });

  it('renders the counselor card', () => {
    render(<Purchase />);
    expect(screen.getByText(/ARE YOU A COUNSELOR?/i)).toBeInTheDocument();
    expect(screen.getByText(/LEARN MORE/i)).toBeInTheDocument();
  });
});
