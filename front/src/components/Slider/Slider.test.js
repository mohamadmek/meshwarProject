import React from 'react';
import { shallow } from 'enzyme';
import Slider from './Slider';

describe('<Slider />', () => {
  test('renders', () => {
    const wrapper = shallow(<Slider />);
    expect(wrapper).toMatchSnapshot();
  });
});
