import React from 'react'

import InputBox from './InputBox'

const SectionTwo = ({ listOfNames }) => (
  <React.Fragment>
    {listOfNames.map(({ firstName, lastName }, index) => (
      <div key={index}>
        <div>Section 2</div>
        <div>First Name: {firstName}</div>
        <div>Last Name: {lastName}</div>
      </div>
    ))}
  </React.Fragment>
)

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: null,
      lastName: null,
      showSectionTwo: true,
      listOfNames: [
        { id: 1, firstName: '12345', lastName: 'Lastname1' },
        { id: 2, firstName: '567567', lastName: 'Lastname2' },
        { id: 3, firstName: '8989089', lastName: 'Lastname3' },
      ],
    }
    this.onChange = this.onChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
    this.toggleSectionTwo = this.toggleSectionTwo.bind(this)
  }

  onChange(event) {
    this.setState({
      ...this.state,
      id: this.state.listOfNames.length + 1,
      [event.target.name]: event.target.value,
    })
  }

  submitForm() {
    this.setState({
      ...this.state,
      listOfNames: [
        ...this.state.listOfNames,
        { firstName: this.state.firstName, lastName: this.state.lastName },
      ],
    })
  }

  toggleSectionTwo() {
    this.setState({
      ...this.state,
      showSectionTwo: !this.state.showSectionTwo,
    })
  }

  render() {
    return (
      <React.Fragment>
        <InputBox
          labelTitle="First Name"
          name="firstName"
          onChangeHandler={this.onChange}
        />
        <InputBox
          labelTitle="Last Name"
          name="lastName"
          onChangeHandler={this.onChange}
        />
        <button onClick={this.submitForm}>Submit</button>
        <button onClick={this.toggleSectionTwo}>Toggle Section 2</button>
        {this.state.showSectionTwo && (
          <SectionTwo listOfNames={this.state.listOfNames} />
        )}
      </React.Fragment>
    )
  }
}

export default Form
