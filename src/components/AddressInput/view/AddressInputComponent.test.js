import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import AddressInputComponent from './AddressInputComponent';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const enzymeWrapper = mount(<AddressInputComponent searchButtonClick={jest.fn()} />);
  return enzymeWrapper;
}

describe('addressInput view', () => {
  it('renders without crashing', () => {
    const component = setup();
    expect(component.find('div').hasClass('addressInput')).toBe(true);
  });

  it('renders with default text, placeholder, and class names', () => {
    const component = setup();

    const addrInput = component.find('input');
    expect(addrInput.props().placeholder).toEqual('');
    expect(addrInput.props().className).toEqual('form-control');

    const button = component.find('button');
    expect(button.props().type).toEqual('button');
    expect(button.text()).toEqual('Submit');
    expect(button.props().className).toEqual('button');
  });

  it('simulates click events', () => {
    const searchButtonClick = sinon.spy();
    const wrapper = mount(<AddressInputComponent searchButtonClick={searchButtonClick} />);
    wrapper.find('button').simulate('click');
    expect(searchButtonClick).toHaveProperty('callCount', 1);
  });

  it('renders with correct button text', () => {
    const component = mount(
      <AddressInputComponent
        searchButtonClick={jest.fn()}
        strings={{ button_text: 'Go!' }}
      />,
    );

    const button = component.find('button');
    expect(button.text()).toEqual('Go!');
  });
});
