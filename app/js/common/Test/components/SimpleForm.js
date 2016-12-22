import React, { PropTypes } from 'react';

const SimpleForm = ({ text, onSubmit }) => (
  <form onSubmit={ (e) => onSubmit(e) }>
    <input placeholder="type something and press enter ..." />
    <h3>{ text }</h3>
  </form>
)

SimpleForm.propTypes = {
  text: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default SimpleForm
