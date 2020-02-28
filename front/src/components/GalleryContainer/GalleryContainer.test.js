import React from 'react';
import { shallow } from 'enzyme';
import GalleryContainer from './GalleryContainer';

describe('<GalleryContainer />', () => {
  test('renders', () => {
    const wrapper = shallow(<GalleryContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
