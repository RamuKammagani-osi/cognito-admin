import React from 'react';
import { shallow } from 'enzyme';
import Cognito from './hello_react.jsx';

describe('Cognito', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Cognito />);
  });

  it('verify the div tag', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('verify the props', () => {
    expect(wrapper.find('div').props().children).toEqual('Cognito Admin');
  });
});
