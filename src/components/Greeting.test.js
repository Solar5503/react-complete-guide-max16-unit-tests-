import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders Hello World as a text', () => {
    //~1
    render(<Greeting />);
    //^2
    //...nothing this case
    //&3
    const greetingElement = screen.getByText('Hello World', { exact: false });
    expect(greetingElement).toBeInTheDocument();
  });

  test('renders good to see you if the button was NOT clicked', () => {
    render(<Greeting />);
    const p = screen.getByText(`It's good to see you!`);
    expect(p).toBeInTheDocument();
  });

  test('renders Changed! if the button was clicked', () => {
    //~1
    render(<Greeting />);
    //^2
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    //&3
    const outElement = screen.getByText('Changed!');
    expect(outElement).toBeInTheDocument();
  });

  test('does not render good to see you if the button was clicked', () => {
    render(<Greeting />);
    const buttonElement = screen.getByText('Change text!');
    userEvent.click(buttonElement);
    const paragraphElement = screen.queryByText(`It's good to see you!`);
    expect(paragraphElement).toBeNull();
  });
});
