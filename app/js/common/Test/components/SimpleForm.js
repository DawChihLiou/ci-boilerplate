import React, { PropTypes } from 'react';

const SimpleForm = ({ text, onChange }) => (
  <form>
    <input 
      placeholder="type something and press enter ..."
      onChange={ (e) => onChange(e) }
    />
    <h3>{ text }</h3>
  </form>
)

SimpleForm.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default SimpleForm
