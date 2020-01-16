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
