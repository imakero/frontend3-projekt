import { useContext } from "react/cjs/react.development"
import styled, { css } from "styled-components"
import { FormContext } from "./Form"

const Label = styled.label``

const Input = styled.input`
  border-radius: 0.25rem;
  padding: 0.5rem 1.25rem;
  font-size: 1rem;
  ${(props) =>
    props.error &&
    css`
      border: 2px solid red;
    `}
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

const ErrorMessage = styled.small`
  color: red;
`

const FormInput = ({ name, label, ...props }) => {
  const { values, handleChange, errors } = useContext(FormContext)

  return (
    <InputContainer>
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        value={values[name]}
        onChange={handleChange(name)}
        error={errors[name]}
        {...props}
      />
      {errors[name] && <ErrorMessage>{errors[name]}</ErrorMessage>}
    </InputContainer>
  )
}

export default FormInput
