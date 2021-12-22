import { useState } from "react"

const useForm = ({
  initialValues,
  onSubmit,
  validation = {},
  handleChange = {},
}) => {
  const [values, setValues] = useState(initialValues)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})

  const internalHandleChange = (name) => {
    return handleChange[name]
      ? handleChange[name]
      : (event) =>
          setValues((prevValues) => ({
            ...prevValues,
            [name]: event.target.value,
          }))
  }

  const validate = () => {
    const validationErrors = {}
    Object.entries(validation).forEach(([name, validationFunction]) => {
      const errorMessage = validationFunction(values[name])
      if (errorMessage) {
        validationErrors[name] = errorMessage
      }
    })
    return Object.keys(validationErrors).length ? validationErrors : null
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    const errorMessages = validate(values)
    if (!errorMessages) {
      setErrors(false)
      await onSubmit(values)
      setIsSubmitting(false)
    } else {
      setErrors(errorMessages)
      setIsSubmitting(false)
    }
  }

  return {
    values,
    setValues,
    handleChange: internalHandleChange,
    handleSubmit,
    errors,
    isSubmitting,
  }
}

export default useForm
