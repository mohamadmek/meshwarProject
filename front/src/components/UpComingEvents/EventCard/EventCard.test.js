import React from 'react';
import { shallow } from 'enzyme';
import EventCard from './EventCard';

describe('<EventCard />', () => {
  test('renders', () => {
    const wrapper = shallow(<EventCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
