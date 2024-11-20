// Import necessary React Testing Library helpers
import { render, screen, fireEvent } from '@testing-library/react';
// Import the Counter component
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component before each test
  render(<Counter />);
});

test('renders counter message', () => {
  // Test if the Counter component renders the header correctly
  const headerElement = screen.getByText(/Counter/i);
  expect(headerElement).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Test if the initial count is 0
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Test if clicking the increment button increases the count
  const incrementButton = screen.getByText('+');
  const countElement = screen.getByTestId('count');

  fireEvent.click(incrementButton);
  expect(countElement).toHaveTextContent('1');

  fireEvent.click(incrementButton);
  expect(countElement).toHaveTextContent('2');
});

test('clicking - decrements the count', () => {
  // Test if clicking the decrement button decreases the count
  const decrementButton = screen.getByText('-');
  const countElement = screen.getByTestId('count');

  fireEvent.click(decrementButton);
  expect(countElement).toHaveTextContent('-1');

  fireEvent.click(decrementButton);
  expect(countElement).toHaveTextContent('-2');
});
