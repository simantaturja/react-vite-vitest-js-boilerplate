import { render, screen } from '@testing-library/react';
import App from '../App';

/* global describe it */

describe('App', () => {
  it('renders headline', () => {
    render(<App title="React" />);
    screen.debug();
  });
});
