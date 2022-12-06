import { render, screen } from '@testing-library/react';
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
});
