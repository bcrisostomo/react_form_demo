import React from 'react'
import styled from 'styled-components'

const InputBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 50vw;
`

export const Label = styled.label`
  font-family: Sans-serif;
  font-size: 1em;
  background-color: orange;
  margin-bottom: 20px;
`
export const Input = styled.input`
  font-family: Sans-serif;
  border-color: black;
`

const InputBox = ({ labelTitle, onChangeHandler, name }) => (
  <InputBoxContainer>
    <Label>{labelTitle}</Label>
    <Input
      placeholder="Enter Text Here"
      name={name}
      onChange={onChangeHandler}
    />
  </InputBoxContainer>
)

export default InputBox
