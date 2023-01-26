import { render, screen } from '@testing-library/react';
import React from 'react';
import Card from './Card';

describe('Card component', () => {
  it('should display the title, description, link, and pic', () => {
    const title = 'My Test Title';
    const description = 'This is a test description';
    const link = 'https://www.example.com';
    const pic = 'https://via.placeholder.com/150';

    render(
      <Card title={title} description={description} link={link} pic={pic} />
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: title })).toHaveAttribute(
      'href',
      link
    );
    expect(screen.getByRole('img')).toHaveAttribute('src', pic);
  });
});
