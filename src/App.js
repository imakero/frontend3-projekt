import { Route, Routes } from "react-router-dom"
import { GlobalStyles } from "./components/styled/Global"
import { CustomersProvider } from "./context/CustomersContext"
import { UserProvider } from "./context/UserContext"
import CustomerDetailsPage from "./pages/CustomerDetailsPage"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import { ThemeProvider } from "styled-components"
import { theme } from "./theme"
import Navigation from "./components/Navigation"
import LogoutPage from "./pages/LogoutPage"
import WelcomePage from "./pages/WelcomePage"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <CustomersProvider>
          <GlobalStyles />
          <Navigation />
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/customers/:id" element={<CustomerDetailsPage />} />
          </Routes>
        </CustomersProvider>
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
