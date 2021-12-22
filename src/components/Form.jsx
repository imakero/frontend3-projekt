import { createContext } from "react"
import useForm from "../hooks/useForm"
import styled from "styled-components"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  font-family: Helvetica, sans serif;
  font-size: 1rem;
`

export const FormContext = createContext()

export const Form = ({ initialValues, onSubmit, validation, children }) => {
  const { values, handleChange, handleSubmit, errors, isSubmitting } = useForm({
    initialValues,
    onSubmit,
    validation,
  })

  return (
    <FormContext.Provider
      value={{ values, handleChange, handleSubmit, errors, isSubmitting }}
    >
      <StyledForm onSubmit={handleSubmit}>{children}</StyledForm>
    </FormContext.Provider>
  )
}
