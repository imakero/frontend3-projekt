import { Header2 } from "./styled/Header2.styled"

const CustomerDetails = ({ customer }) => {
  return (
    <>
      <Header2>{customer.name}</Header2>
      <table>
        <tbody>
          <tr>
            <td>Namn:</td>
            <td>{customer.name}</td>
          </tr>
          <tr>
            <td>Organisationsnummer:</td>
            <td>{customer.organisationNr}</td>
          </tr>
          <tr>
            <td>VAT-nummer:</td>
            <td>{customer.vatNr}</td>
          </tr>
          <tr>
            <td>Referens:</td>
            <td>{customer.reference}</td>
          </tr>
          <tr>
            <td>Betalningsvillkor (dagar):</td>
            <td>{customer.paymentTerm}</td>
          </tr>
          <tr>
            <td>Webbsida:</td>
            <td>
              <a href={customer.website} target="_blank" rel="noreferrer">
                {customer.website}
              </a>
            </td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>
              <a href={`mailto:${customer.email}`}>{customer.email}</a>
            </td>
          </tr>
          <tr>
            <td>Telefonnummer:</td>
            <td>
              <a href={`tel:${customer.phoneNumber}`}>{customer.phoneNumber}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default CustomerDetails
