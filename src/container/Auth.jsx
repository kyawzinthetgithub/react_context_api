import LoginForm from "./LoginForm";
import Home from "./Home";
import { UseUserContext } from "../context/userContext";

export default function Auth() {
  const {user} = UseUserContext()
  return <>{user.isGuessUser ? <LoginForm /> : <Home />}</>;
}
