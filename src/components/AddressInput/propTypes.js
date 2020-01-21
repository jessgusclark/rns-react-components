import propTypes from 'prop-types';

export const stringDefaults = ({
  label: '',
  placeholder: '',
  button_text: 'Submit',
});

export const stringTypes = (
  propTypes.shape({
    label: propTypes.string,
    placeholder: propTypes.string,
    button_text: propTypes.string,
  })
);

export const classNameDefaults = ({
  div: 'address-input',
  label: '',
  input: 'form-control',
  button: 'button',
});

export const classNameTypes = (
  propTypes.shape({
    div: propTypes.string,
    label: propTypes.string,
    input: propTypes.string,
    button: propTypes.string,
  })
);
