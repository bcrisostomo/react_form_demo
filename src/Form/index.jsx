import React, { useState } from 'react'

import InputBox from './InputBox'

export const SectionTwo = ({ listOfNames }) => (
  <React.Fragment>
    <h3>Section 2</h3>
    {listOfNames.map(({ firstName, lastName }, index) => (
      <div key={index}>
        <div>First Name: {firstName}</div>
        <div>Last Name: {lastName}</div>
      </div>
    ))}
  </React.Fragment>
)

const Form = () => {
  const initialListOfNames = [
    { id: 1, firstName: '12345', lastName: 'Lastname1' },
    { id: 2, firstName: '567567', lastName: 'Lastname2' },
    { id: 3, firstName: '8989089', lastName: 'Lastname3' },
  ]

  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [listOfNames, setListOfNames] = useState(initialListOfNames)
  const [showSectionTwo, toggleSectionTwo] = useState(false)

  const submitButtonHandler = () =>
    setListOfNames([
      ...listOfNames,
      { id: listOfNames.length + 1, firstName, lastName },
    ])

  return (
    <React.Fragment>
      <InputBox
        labelTitle="First Name"
        name="firstName"
        onChangeHandler={event => setFirstName(event.target.value)}
      />
      <InputBox
        labelTitle="Last Name"
        name="lastName"
        onChangeHandler={event => setLastName(event.target.value)}
      />
      <button id="submit-btn" onClick={submitButtonHandler}>
        Submit
      </button>
      <button id="toggle" onClick={() => toggleSectionTwo(!showSectionTwo)}>
        Toggle Section 2
      </button>
      {showSectionTwo && <SectionTwo listOfNames={listOfNames} />}
    </React.Fragment>
  )
}

export default Form
