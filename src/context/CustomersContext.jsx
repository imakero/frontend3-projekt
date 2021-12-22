import { createContext, useCallback, useEffect, useState } from "react"
import api from "../lib/api"

export const CustomersContext = createContext()

export const CustomersProvider = ({ children }) => {
  const [customers, setCustomers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchCustomers = useCallback(
    () =>
      api.get("/api/v1/customers").then((data) => {
        setCustomers(data.results)
        setIsLoading(false)
      }),
    []
  )

  useEffect(() => {
    if (!localStorage.getItem("js3-project-token")) {
      return
    }
    if (customers.length) {
      return
    }
    fetchCustomers()
  }, [fetchCustomers, customers])

  return (
    <CustomersContext.Provider
      value={{ customers, setCustomers, fetchCustomers, isLoading }}
    >
      {children}
    </CustomersContext.Provider>
  )
}
