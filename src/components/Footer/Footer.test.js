import { render, screen } from '@testing-library/react';
import React from 'react';
import Footer from './Footer';

describe('Footer', () => {
  it('should render correctly', () => {
    const { container } = render(<Footer />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should have a form input and a submit button', () => {
    render(<Footer />);
    const input = screen.getByPlaceholderText('Enter your e-mail');
    const submitBtn = screen.getByRole('button', { name: 'Enter' });
    expect(input).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });

  it('should render the correct elements', () => {
    render(<Footer />);

    const subscribeTitle = screen.getByText('Subscribe');
    const subscribeText = screen.getByText(
      "We'll never to spam you or share your email"
    );
    const emailInput = screen.getByPlaceholderText('Enter your e-mail');
    const enterButton = screen.getByText('Enter');
    const homeLink = screen.getByText('Home');
    const blogsLink = screen.getByText('Blogs');
    const aboutLink = screen.getByText('About');
    const contactLink = screen.getByText('Contact');

    expect(subscribeTitle).toBeInTheDocument();
    expect(subscribeText).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(enterButton).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(blogsLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });
});
