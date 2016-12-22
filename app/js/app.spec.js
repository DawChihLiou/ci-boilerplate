import React from 'react';
import App from './app';
import { render, shallow } from 'enzyme';

describe('<App />', () => {
  const app = shallow(<App />);

  it('should render two <Link />', () => {
    expect(app.find('Link').length).toBe(2);
  });

  it('should have a Home Link', () => {
    expect(app.find('Link[to="/"]')).toBeDefined();
  });

  it('should have a About Link', () => {
    expect(app.find('Link[to="/about"]')).toBeDefined();
  });
});
