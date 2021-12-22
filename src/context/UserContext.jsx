import { createContext, useCallback, useEffect, useState } from "react"
import api from "../lib/api"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchUser = useCallback(
    () =>
      api.get("/api/v1/me/").then((data) => {
        setIsLoading(true)
        setUser(data)
        setIsLoading(false)
      }),
    []
  )

  useEffect(() => {
    if (!localStorage.getItem("js3-project-token")) {
      return
    }
    if (user) {
      return
    }
    fetchUser()
  }, [fetchUser, user])

  return (
    <UserContext.Provider value={{ user, setUser, fetchUser, isLoading }}>
      {children}
    </UserContext.Provider>
  )
}
