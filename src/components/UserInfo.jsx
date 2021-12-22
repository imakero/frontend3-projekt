import { useContext } from "react/cjs/react.development"
import { UserContext } from "../context/UserContext"
import { Paragraph } from "./styled/Paragraph.styled"

const UserInfo = () => {
  const { user, isLoading } = useContext(UserContext)

  return isLoading || !user ? (
    <Paragraph light>Läser in användare...</Paragraph>
  ) : (
    <Paragraph light>
      Inloggad som {user.firstName} {user.lastName} ({user.email})
    </Paragraph>
  )
}

export default UserInfo
