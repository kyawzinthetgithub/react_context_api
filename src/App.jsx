import Auth from "./container/Auth";
import Header from "./container/header";
import { UserContextProvider } from "./context/userContext";

export default function App() {
  return (
    <div className="">
      <UserContextProvider>
        <Header />
        <Auth />
      </UserContextProvider>
    </div>
  );
}
