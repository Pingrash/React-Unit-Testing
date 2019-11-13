import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../button';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import renderer from 'react-test-renderer';

// Calls cleanup after each test to clear the DOM for the next test.
afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button></Button>, div);
});

it('renders button correctly', () => {
  const { getByTestId } = render(
    <Button label='Click me please' />
  );
  expect(getByTestId('button')).toHaveTextContent(
    'Click me please'
  );
});

it('matches snapshot', () => {
  const tree = renderer
    .create(<Button label='save' />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
