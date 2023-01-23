import { render } from '@testing-library/react';
import About from './About';

describe('About', () => {
  it('renders the heading and text', async () => {
    const { getByText } = render(<About />);

    expect(getByText('Healing!')).toBeInTheDocument();
    expect(getByText('Helping you heal')).toBeInTheDocument();
    expect(getByText('Our Founding')).toBeInTheDocument();
    expect(
      getByText(
        "At Healing 'we believe there is a better way to do things. A more valuable way where customers are earned rather than bought. We're obsessively passionate about it' and our mission is to help people achieve it. We focus on search engine optimization. It 's one of the least understood and least transparent aspects of great marketing' and we see that as an opportunity. We're excited to simplify SEO for everyone through our software, education, and community."
      )
    ).toBeInTheDocument();
  });

  it('renders the image', async () => {
    const { container } = render(<About />);
    const img = container.querySelector('img');
    expect(img).toBeInTheDocument();
    expect(img.src).toContain('https://github.com/rageofkurd.png');
    expect(img.getAttribute('alt')).toEqual('Therapist');
  });
});
