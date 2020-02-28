import React from 'react';
import { shallow } from 'enzyme';
import ContactUsPage from './ContactUsPage';

describe('<ContactUsPage />', () => {
  test('renders', () => {
    const wrapper = shallow(<ContactUsPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
