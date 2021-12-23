import { Form } from "./Form"
import FormInput from "./FormInput"

const defaultFormValues = {
  name: "",
  organisationNr: "",
  vatNr: "",
  reference: "",
  paymentTerm: "0",
  website: "",
  email: "",
  phoneNumber: "",
}

const validation = {
  vatNr: (value) => {
    if (!value.match(/^[Ss][Ee]\d{10,10}$/)) {
      return 'VAT-nummer måste börja med "SE" följt av 10 siffror.'
    }
    if (value.length !== 12) {
      return "This VAT-nr is too short"
    }
  },
}

const CustomerForm = ({
  onSubmit,
  initialValues = defaultFormValues,
  children,
}) => {
  return (
    <Form
      initialValues={initialValues}
      onSubmit={onSubmit}
      validation={validation}
    >
      <FormInput name="name" label="Namn" />
      <FormInput name="organisationNr" label="Organisationsnummer" />
      <FormInput name="vatNr" label="VAT-nummer" />
      <FormInput name="reference" label="Referens" />
      <FormInput
        name="paymentTerm"
        label="Betalningsvillkor (dagar)"
        type="number"
        min={0}
        max={2147483647}
        step={1}
      />
      <FormInput name="website" label="Webbsida" type="url" />
      <FormInput name="email" label="Email" type="email" />
      <FormInput name="phoneNumber" label="Telefonnummer" type="tel" />
      {children}
    </Form>
  )
}

export default CustomerForm
