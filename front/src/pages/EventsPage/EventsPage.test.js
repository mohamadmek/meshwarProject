import React from 'react';
import { shallow } from 'enzyme';
import EventsPage from './EventsPage';

describe('<EventsPage />', () => {
  test('renders', () => {
    const wrapper = shallow(<EventsPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
