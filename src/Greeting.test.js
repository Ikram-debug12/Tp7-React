import { render, screen } from '@testing-library/react';
import WelcomeMessage from './Greeting';

test('devrait afficher le message de bienvenue avec le nom fourni', () => {
  render(<WelcomeMessage username="Ikram" />);
  const message = screen.getByText(/Bonjour, Ikram/i);
  expect(message).toBeInTheDocument();
});

test('devrait utiliser le nom par défaut si aucun username n’est fourni', () => {
  render(<WelcomeMessage />);
  const message = screen.getByText(/Visiteur/i);
  expect(message).toBeInTheDocument();
});

test('devrait afficher le message selon l\'heure', () => {
  const mockDate = new Date(2024, 0, 1, 10, 0, 0);
  render(<WelcomeMessage username="Ikram" date={mockDate} />);
  const message = screen.getByText(/Bonjour, Ikram/i);
  expect(message).toBeInTheDocument();
});