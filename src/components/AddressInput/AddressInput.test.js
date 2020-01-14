/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { mount } from 'enzyme';

import AddressInput from './AddressInput';

describe('tests the AddressInput', () => {
  const mockCallBack = jest.fn();

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddressInput response={mockCallBack} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render a textfield and a button', () => {
    const item = renderer.create(
      <AddressInput response={mockCallBack} />,
    ).toJSON();

    expect(item.children[0].type).toBe('input');
    expect(item.children[0].props.type).toBe('text');

    expect(item.children[1].type).toBe('input');
    expect(item.children[1].props.type).toBe('button');
  });

  it('should display text defaults', () => {
    const setupText = {
      submit: 'submit this',
      placeholder: 'placeholder text',
    };

    const item = renderer.create(
      <AddressInput
        response={mockCallBack}
        textDefaults={setupText}
      />,
    ).toJSON();

    const textInput = item.children[0];
    expect(textInput.props.placeholder).toBe('placeholder text');

    const button = item.children[1];
    expect(button.props.value).toBe('submit this');
  });

  it('should retrun an error when button is clicked without input', () => {
    let result = '';

    const wrapper = mount(
      <AddressInput response={(response) => { result = response; }} />,
    );

    wrapper.find('.form-control').value = 'Response!';

    wrapper.find('.button').simulate('click');
    expect(result.error).toBe('no input was provided');
  });
});
