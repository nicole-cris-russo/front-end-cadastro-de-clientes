import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

export const NavBar = () => {
    const {user, exitAccout } = useContext(UserContext)
    const firstName = user?.fullName.split(" ")[0]
    
    return (
        <>
            <ul className="flex flex-col gap-4 uppercase font-sans text-lg">
                <li className="flex justify-between items-center border-y-4 p-3 rounded border-laranja">
                    <h1 className="text-4xl hover:cursor-pointer">{firstName}</h1>
                </li>
                <li>
                    <span className="hover:cursor-pointer">adicionar cliente</span>
                </li>
                <li>
                    <span className="hover:cursor-pointer">clientes</span>
                </li>
            </ul>
            <ul className="flex flex-row justify-between gap-4 uppercase font-sans text-lg">
                <li>
                    <span className="hover:cursor-pointer" onClick={() => exitAccout()}>sair</span>
                </li>
                <li className="ml-auto">
                    <span className="hover:cursor-pointer">sobre</span>
                </li>
                <li>
                    <span className="hover:cursor-pointer">contato</span>
                </li>
            </ul>
            
        </>
    )
}