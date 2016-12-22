import React from 'react'
import { shallow } from 'enzyme'
import SimpleForm from './SimpleForm'

describe('<SimpleForm />', () => {
  const sf = shallow(<SimpleForm text="test" onChange={ (e) => {} }/>)

  it('should have an <form>', () => {
    expect(sf.find('form').length).toBe(1)
  })

  it('should have an <input />', () => {
    expect(sf.find('input').length).toBe(1)
  })

  it('should have a <h3>', () => {
    expect(sf.find('h3').length).toBe(1)
  })

  it('should have propTypes', () => {
    expect(SimpleForm.propTypes).toBeDefined()
  })
})
