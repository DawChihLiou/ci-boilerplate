import React from 'react';
import Test from './index';
import { shallow } from 'enzyme';

describe('<Test />', () => {
  const test = shallow(<Test />);

  xit('should have a <SimpleFormContainer />', () => {
    expect(test.find('SimpleFormContainer').length).toBe(1);
  });
});
