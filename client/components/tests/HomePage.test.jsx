import React from 'react';
import renderer from 'react-test-renderer';
import { Home } from '../HomePage';

const props = {
  exampleRequest: jest.fn(),
  clearMessage: jest.fn(),
};

test('Home renders as expected', () => {
  const component = renderer.create(
    <Home {...props} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
