import { render, screen } from '@testing-library/react';
import React from 'react';
import LearnMore from './LearnMore';

describe('LearnMore', () => {
  it('renders the component', () => {
    render(<LearnMore />);

    expect(screen.getByText('WHY WORK WITH HEALING?')).toBeInTheDocument();
    expect(screen.getByText('FOCUS ON COUNSELING')).toBeInTheDocument();
    expect(screen.getByText('REQUIREMENTS')).toBeInTheDocument();
    expect(screen.getByText('GET STARTED')).toBeInTheDocument();
  });
});
