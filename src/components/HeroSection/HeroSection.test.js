import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { useNavigate } from 'react-router';
import HeroSection from './HeroSection';

jest.mock('react-router', () => {
  return {
    useNavigate: jest.fn(),
  };
});

describe('HeroSection', () => {
  it('should render the HeroSection', () => {
    const { getByText } = render(<HeroSection />);
    expect(getByText('We Are Here To')).toBeInTheDocument();
    expect(getByText('Help you')).toBeInTheDocument();
    expect(getByText('BOOK AN APPOINTMENT')).toBeInTheDocument();
  });

  it('should navigate to the book page when the button is clicked', () => {
    const navigate = jest.fn();
    useNavigate.mockImplementation(() => navigate);

    const { getByText } = render(<HeroSection />);
    const button = getByText('BOOK AN APPOINTMENT');
    fireEvent.click(button);

    expect(navigate).toHaveBeenCalledWith('/book');
  });
});
