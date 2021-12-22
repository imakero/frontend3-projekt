import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useContext } from "react/cjs/react.development"
import CustomerDetails from "../components/CustomerDetails"
import CustomerForm from "../components/CustomerForm"
import { Button } from "../components/styled/Button.styled"
import { Container } from "../components/styled/Container.styled"
import { Header2 } from "../components/styled/Header2.styled"
import { CustomersContext } from "../context/CustomersContext"
import api from "../lib/api"

const CustomerDetailsPage = () => {
  const [editing, setEditing] = useState(false)
  const { customers, fetchCustomers, isLoading } = useContext(CustomersContext)
  const { id } = useParams()
  const navigate = useNavigate()

  if (isLoading) {
    return <div>Loading customer...</div>
  }

  const customer = customers.find((customer) => customer.id === parseInt(id))

  if (!customer) {
    return <div>Customer with id="{id}" could not be found.</div>
  }

  const handleDeleteCustomer = () => {
    if (window.confirm("Are you sure?")) {
      api.delete(`/api/v1/customers/${customer.id}/`).then(() => {
        fetchCustomers()
        navigate("/home")
      })
    }
  }

  const handleUpdateCustomer = (values) => {
    setEditing(false)
    api.patch(`/api/v1/customers/${customer.id}/`, values).then(() => {
      fetchCustomers()
      console.log("updated")
    })
  }

  return (
    <Container>
      {editing && (
        <CustomerForm
          initialValues={{
            name: customer.name,
            organisationNr: customer.organisationNr,
            vatNr: customer.vatNr,
            reference: customer.reference,
            paymentTerm: customer.paymentTerm,
            website: customer.website,
            email: customer.email,
            phoneNumber: customer.phoneNumber,
          }}
          onSubmit={handleUpdateCustomer}
        >
          <Button type="submit">✏️ Uppdatera kund</Button>
        </CustomerForm>
      )}
      {!editing && <CustomerDetails customer={customer} />}
      <Header2>Alternativ</Header2>
      {editing ? (
        <Button onClick={() => setEditing(false)}>Avbryt</Button>
      ) : (
        <Button onClick={() => setEditing(true)}>Ändra uppgifter ✏️</Button>
      )}
      <Button onClick={handleDeleteCustomer}>Ta bort kund ❌</Button>
    </Container>
  )
}

export default CustomerDetailsPage
