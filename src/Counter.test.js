import { render, screen, fireEvent } from '@testing-library/react';
import CounterWidget from './Counter';

test('le compteur s\'incrémente correctement', () => {
  render(<CounterWidget />);
  const incrementButton = screen.getByRole('button', { name: '➕' });
  const counterValue = screen.getByText('0');
  
  fireEvent.click(incrementButton);
  expect(counterValue).toHaveTextContent('1');
});

test('le compteur se décrémente correctement', () => {
  render(<CounterWidget />);
  const decrementButton = screen.getByRole('button', { name: '➖' });
  const counterValue = screen.getByText('0');
  
  fireEvent.click(decrementButton);
  expect(counterValue).toHaveTextContent('-1');
});

test('le bouton de réinitialisation remet le compteur à zéro', () => {
  render(<CounterWidget />);
  const incrementButton = screen.getByRole('button', { name: '➕' });
  const resetButton = screen.getByRole('button', { name: '🔄 Réinitialiser' });
  const counterValue = screen.getByText('0');
  
  fireEvent.click(incrementButton); 
  fireEvent.click(incrementButton); 
  fireEvent.click(resetButton);
  expect(counterValue).toHaveTextContent('0');
});