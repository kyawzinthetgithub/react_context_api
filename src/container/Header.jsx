import { UseUserContext } from "../context/userContext";

export default function Header() {
    const {user} = UseUserContext();
    return(
        <div className="bg-white">
            <div className="w-full p-5 flex justify-between items-center">
                <h2 className="text-xl font-semibold">React ContextApi</h2>
                <div className="text-lg font-semibold flex justify-between items-center">
                    <h3>Welcome, {user.name}</h3>
                </div>
            </div>
        </div>
    );
}