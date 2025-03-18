import { UseUserContext } from "../context/userContext";

export default function Header() {
  const { user, logout } = UseUserContext();
  return (
    <div className="bg-white">
      <div className="w-full p-5 flex justify-between items-center">
        <h2 className="text-xl font-semibold">React ContextApi</h2>
        <div className="text-lg font-semibold flex justify-between items-center">
          <h3>Welcome, {user.name}</h3>
          {!user.isGuessUser && (
            <button
              onClick={logout}
              className="bg-blue-500 text-white mx-3 px-3 py-1 rounded font-thin text-base cursor-pointer select-none"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
