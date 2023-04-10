import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

export const Profile = () => {
    const { user } = useContext(UserContext)
    return (
        <div className="w-full h-full p-5 flex flex-col">
            <h1 className="text-2xl">{user?.fullName}</h1>
            <p>Email: {user?.email}</p>
        </div>
    )
}