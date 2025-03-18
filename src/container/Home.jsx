import { UseUserContext } from "../context/userContext";

export default function Home() {
    const {user,logout} = UseUserContext();
  return (
    <>
      <div className="w-full flex justify-center items-center mt-5">
        <div className="bg-white p-5 rounded-xl">
            <h1 className="text-2xl text-green-900">You are not login as ,{user.name}</h1>
            <h1 className="text-2xl text-green-900">Hello {user.name}</h1>
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
    </>
  );
}
