import LoginForm from "./LoginForm";
import Home from "./Home";

export default function Auth() {
  const user = true;
  return <>{user ? <LoginForm /> : <Home />}</>;
}
