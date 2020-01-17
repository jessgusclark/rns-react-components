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
    expect(addrInput.props().id).toEqual('');

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

  it('renders with custom button text', () => {
    const component = mount(
      <AddressInputComponent
        searchButtonClick={jest.fn()}
        strings={{ button_text: 'Go!' }}
      />,
    );

    const button = component.find('button');
    expect(button.text()).toEqual('Go!');
  });

  it('renders with custom placeholder text', () => {
    const component = mount(
      <AddressInputComponent
        searchButtonClick={jest.fn()}
        strings={{ placeholder: 'enter address or domain' }}
      />,
    );

    const addrInput = component.find('input');
    expect(addrInput.props().placeholder).toEqual('enter address or domain');
  });

  it('renders with custom label text', () => {
    const component = mount(
      <AddressInputComponent
        searchButtonClick={jest.fn()}
        strings={{ label: 'Address' }}
      />,
    );

    const label = component.find('label');
    expect(label.props().htmlFor).toEqual('rns-address-input');
    expect(label.text()).toEqual('Address');
  });

  it('renders with injectHtml afterInput', () => {
    const component = mount(
      <AddressInputComponent
        searchButtonClick={jest.fn()}
        injectHtml={{ afterInput: <span>.rsk</span> }}
      />,
    );

    const div = component.find('span');
    expect(div.length).toBe(1);
    expect(div.text()).toEqual('.rsk');
  });

  it('renders with custom CSS', () => {
    const classNames = [
      { div: 'myDiv' },
      { label: 'myLabel' },
      { input: 'myInput' },
      { button: 'myButton' },
    ];

    const component = mount(
      <AddressInputComponent
        searchButtonClick={jest.fn()}
        classNames={classNames}
      />,
    );

    const div = component.find('div');
    expect(div.props().className).toBe('myDiv');
    const label = component.find('label');
    expect(label.props().className).toBe('myLabel');
    const input = component.find('input');
    expect(input.props().className).toBe('myLabel');
    const button = component.find('button');
    expect(button.props().className).toBe('myButton');
  });
});
