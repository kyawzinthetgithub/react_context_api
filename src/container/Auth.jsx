import LoginForm from "./LoginForm";
import Home from "./Home";

export default function Auth() {
  const user = false;
  return <>{user ? <LoginForm /> : <Home />}</>;
}
