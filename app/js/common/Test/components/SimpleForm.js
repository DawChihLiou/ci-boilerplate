import React, { PropTypes } from 'react';

const SimpleForm = ({ text, onSubmit }) => (
  <from onSubmit={ (e) => onSubmit(e) }>
    <inputplaceholder="type something and press enter ..." />
    <h3>{ text }</h3>
  </div>
)

SimpleForm.propTypes = {
  text: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default SimpleForm
