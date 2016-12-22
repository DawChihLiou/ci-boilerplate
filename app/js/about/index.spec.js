import React from 'react';
import About from './index';
import { shallow } from 'enzyme';

describe('<About />', () => {
  const about = shallow(<About />);

  it('should have a <h1>', () => {
    expect(about.find('h1').length).toBe(1);
  });
});
