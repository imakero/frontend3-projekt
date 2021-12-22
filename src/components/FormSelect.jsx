import { useContext } from "react/cjs/react.development"
import styled, { css } from "styled-components"
import { FormContext } from "./Form"

const Label = styled.label``

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

const Select = styled.select`
  padding: 0.5rem 1.25rem;
  font-size: 1rem;
  ${(props) =>
    props.error &&
    css`
      border: 2px solid red;
    `}
`

const FormSelect = ({ name, label, ...props }) => {
  const { values, handleChange, errors } = useContext(FormContext)

  return (
    <InputContainer>
      <Label>{label}</Label>
      <Select
        id={name}
        value={values[name]}
        onChange={handleChange(name)}
        error={errors[name]}
        {...props}
      >
        {props.children}
      </Select>
    </InputContainer>
  )
}

export default FormSelect
