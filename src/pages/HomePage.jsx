import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import CustomerForm from "../components/CustomerForm"
import { Button } from "../components/styled/Button.styled"
import { Container } from "../components/styled/Container.styled"
import UserInfo from "../components/UserInfo"
import { CustomersContext } from "../context/CustomersContext"
import { UserContext } from "../context/UserContext"
import api from "../lib/api"

const HomePage = () => {
  const { fetchUser } = useContext(UserContext)
  const { customers, fetchCustomers } = useContext(CustomersContext)

  useEffect(fetchUser, [fetchUser])
  useEffect(fetchCustomers, [fetchCustomers])

  const onSubmit = (values) => {
    api
      .post("/api/v1/customers/", values)
      .then((res) => res.json())
      .then(() => fetchCustomers())
  }

  return (
    <Container>
      <UserInfo />
      <h2>Customers</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            <Link to={`/customers/${customer.id}`}>
              {customer.name} ({customer.organisationNr})
            </Link>
          </li>
        ))}
      </ul>
      <h2>Add Customer</h2>
      <CustomerForm onSubmit={onSubmit}>
        <Button type="submit">Lägg till kund</Button>
      </CustomerForm>
    </Container>
  )
}

export default HomePage
