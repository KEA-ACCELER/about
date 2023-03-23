import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Home.js', () => {
  render(<App />);
  const linkElement = screen.getByText(/Github/i);
  expect(linkElement).toBeInTheDocument();
});
