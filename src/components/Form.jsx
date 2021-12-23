import { createContext } from "react"
import useForm from "../hooks/useForm"
import { StyledForm } from "./styled/StyledForm.styled"

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
