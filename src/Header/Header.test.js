import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Header from '.'

Enzyme.configure({ adapter: new Adapter() })

describe('Header Component', () => {
  it('should render the propped Header text', () => {
    const mounted = mount(<Header header="The Form of Forms" />)
    const expected = 'The Form of Forms'
    expect(mounted.find('h1').text()).toEqual(expected)
  })

  it('should render the propped Subheader text', () => {
    const mounted = mount(
      <Header header="The Form of Forms" subHeader="Login" />
    )
    const expected = 'Login'
    expect(mounted.find('h2').text()).toEqual(expected)
  })
})
