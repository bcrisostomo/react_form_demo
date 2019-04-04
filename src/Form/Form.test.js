import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Form, { SectionTwo } from '.'

Enzyme.configure({ adapter: new Adapter() })

describe('Form component', () => {
  it('should show Section 2 when Show Section 2 is toggled', () => {
    const mounted = mount(<Form />)

    mounted.find('#toggle').simulate('click')
    expect(mounted.find('h3').exists()).toBeTruthy()
  })

  describe('Given the submit button is clicked', () => {
    it('should add a new item to the listOfNames', () => {
      const mounted = mount(<Form />)
      mounted.find('#toggle').simulate('click')

      const lengthOfListOfNamesProp = mounted
        .find(SectionTwo)
        .prop('listOfNames').length

      mounted.find('#submit-btn').simulate('click')

      expect(mounted.find(SectionTwo).prop('listOfNames').length).toEqual(
        lengthOfListOfNamesProp + 1
      )
    })
  })
})
