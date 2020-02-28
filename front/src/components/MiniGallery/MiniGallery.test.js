import React from 'react';
import { shallow } from 'enzyme';
import MiniGallery from './MiniGallery';

describe('<MiniGallery />', () => {
  test('renders', () => {
    const wrapper = shallow(<MiniGallery />);
    expect(wrapper).toMatchSnapshot();
  });
});
