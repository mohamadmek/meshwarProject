import React from 'react';
import { shallow } from 'enzyme';
import HowItWorks from './HowItWorks';

describe('<HowItWorks />', () => {
  test('renders', () => {
    const wrapper = shallow(<HowItWorks />);
    expect(wrapper).toMatchSnapshot();
  });
});
