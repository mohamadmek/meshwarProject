import React from 'react';
import { shallow } from 'enzyme';
import GalleryPage from './GalleryPage';

describe('<GalleryPage />', () => {
  test('renders', () => {
    const wrapper = shallow(<GalleryPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
