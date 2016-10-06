import React from 'react';
import renderer from 'react-test-renderer';
import About from '../About';

test('About renders as expected', () => {
  const component = renderer.create(
    <About />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
