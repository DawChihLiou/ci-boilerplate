import React from 'react';
import Test from '../../../common/Test';
import { shallow } from 'enzyme';

describe('<Test />', () => {
  const test = shallow(<Test />);

  it('should have a <p>', () => {
    expect(test.find('p').length).toBe(1);
  });
});

