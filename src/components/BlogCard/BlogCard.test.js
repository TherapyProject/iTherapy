import { render } from '@testing-library/react';
import React from 'react';
import BlogCard from './BlogCard';

describe('BlogCard', () => {
  it('renders the correct content', () => {
    const img = 'https://example.com/image.jpg';
    const title = 'Blog Title';
    const authImg = 'https://example.com/author-image.jpg';
    const authName = 'Author Name';
    const minsRead = '5';

    const { getByAltText, getByText } = render(
      <BlogCard
        img={img}
        title={title}
        authImg={authImg}
        authName={authName}
        minsRead={minsRead}
      />
    );

    // Check that the image is rendered
    const image = getByAltText('blog');
    expect(image).toBeInTheDocument();
    expect(image.getAttribute('src')).toBe(img);

    // Check that the title is rendered
    const titleText = getByText(title);
    expect(titleText).toBeInTheDocument();

    // Check that the author name and image are rendered
    const authorName = getByText(authName);
    expect(authorName).toBeInTheDocument();
    const authorImage = getByAltText(authName);
    expect(authorImage).toBeInTheDocument();
    expect(authorImage.getAttribute('src')).toBe(authImg);

    // Check that the minutes read text is rendered
    const minsReadText = getByText(`${minsRead} mins read`);
    expect(minsReadText).toBeInTheDocument();
  });
});
