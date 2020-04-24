import React from 'react';
import { render } from '@testing-library/react';
import App from '../App/App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const name = getByText(/Khwilo Kabaka/i);
  expect(name).toBeInTheDocument();
});
