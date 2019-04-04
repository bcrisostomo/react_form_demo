import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import InputBox, { Label, Input } from './InputBox'

Enzyme.configure({ adapter: new Adapter() })

describe('Input Box', () => {
  it('should display the label text', () => {
    const mounted = mount(<InputBox labelTitle="First Name" />)
    const expected = 'First Name'
    expect(
      mounted
        .find(Label)
        .at(0)
        .text()
    ).toEqual(expected)
  })

  it('should execute given function on user input', () => {
    const mockOnchangeHandler = jest.fn(event => event.target)
    const mounted = mount(<InputBox onChangeHandler={mockOnchangeHandler} />)

    const mockEvent = { target: { name: 'inputBox', value: 'textinput' } }
    mounted.find(Input).simulate('change', mockEvent)
    expect(mockOnchangeHandler).toHaveReturnedWith({
      name: 'inputBox',
      value: 'textinput',
    })
  })
})
