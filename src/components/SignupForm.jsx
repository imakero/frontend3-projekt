import { Form } from "../components/Form"
import FormInput from "../components/FormInput"
import FormSelect from "../components/FormSelect"

const defaultFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  organisationName: "",
  organisationKind: "0",
}

const SignupForm = ({ onSubmit, children }) => {
  return (
    <Form initialValues={defaultFormValues} onSubmit={onSubmit}>
      <FormInput name="firstName" label="Förnamn" />
      <FormInput name="lastName" label="Efternamn" />
      <FormInput name="email" type="email" label="Email" />
      <FormInput name="password" type="password" label="Lösenord" />
      <FormInput name="organisationName" label="Organisationsnamn" />
      <FormSelect name="organisationKind" label="Organisationstyp">
        <option value="0">Val 1</option>
        <option value="1">Val 2</option>
        <option value="2">Val 3</option>
      </FormSelect>
      {children}
    </Form>
  )
}

export default SignupForm
