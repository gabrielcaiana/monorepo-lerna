import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Input from '.';
describe('Input', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<input></input>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});