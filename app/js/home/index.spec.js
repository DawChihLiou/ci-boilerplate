import React from 'react';
import Home from './index';
import { shallow } from 'enzyme';

describe('<Home />', () => {
  const home = shallow(<Home />);

  it('should have one header', () => {
    expect(home.find('h1').length).toBe(1);
  });

  it('should display "This is Home View"', () => {
    expect(home.find('h1').text()).toEqual('This is Home View.')
  })
});
