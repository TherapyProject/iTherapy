import { render, screen } from '@testing-library/react';
import React from 'react';
import Communication from './Communication';

describe('Communication', () => {
  it('should render correctly', () => {
    const { container } = render(<Communication />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders three cards', () => {
    render(<Communication />);
    const cards = screen.getAllByRole('link');
    expect(cards).toHaveLength(3);
  });

  it('renders a title', () => {
    render(<Communication />);
    const title = screen.getByText('WE CAN COMMUNICATE THROUGH');
    expect(title).toBeInTheDocument();
  });

  it('renders the correct title and description for each card', () => {
    render(<Communication />);
    const voiceCallCard = screen.getByText('Voice Call');
    const chatCard = screen.getByText('Chat');
    const videoCallCard = screen.getByText('Video Call');
    expect(voiceCallCard).toBeInTheDocument();
    expect(
      screen.getByText(
        'Feeling ready to start a conversation? Give your therapist a voice call and talk your heart out!'
      )
    ).toBeInTheDocument();
    expect(chatCard).toBeInTheDocument();
    expect(
      screen.getByText(
        'Need to talk to someone? Come have a chat with your therapist!'
      )
    ).toBeInTheDocument();
    expect(videoCallCard).toBeInTheDocument();
    expect(
      screen.getByText(
        'For better experience therapists recommend video calls, but always remember that its a choice!'
      )
    ).toBeInTheDocument();
  });
});
