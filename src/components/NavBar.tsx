import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import { IClientContext, IUserContext } from "../types"
import { ClientContext } from "../contexts/ClientContext"

export const NavBar = () => {
    const { exitAccout, user, setButton } = useContext<IUserContext>(UserContext)
    const { setModal } = useContext<IClientContext>(ClientContext)

    const firstName = user?.fullName.split(" ")[0]
    
    return (
        <>
            <ul className="flex flex-col gap-4 uppercase font-sans text-lg">
                <li className="flex justify-between items-center border-y-4 p-3 rounded border-laranja">
                    <h1 className="text-4xl hover:cursor-pointer" onClick={() => {setButton("profile")}}>{firstName}</h1>
                </li>
                <li>
                    <span className="hover:cursor-pointer" onClick={() => {setModal(true)}}>adicionar cliente</span>
                </li>
                <li>
                    <span className="hover:cursor-pointer" onClick={() => {setButton("listClients")}}>clientes</span>
                </li>
            </ul>
            <ul className="flex flex-row justify-between gap-4 uppercase font-sans text-lg">
                <li>
                    <span className="hover:cursor-pointer" onClick={() => exitAccout()}>sair</span>
                </li>
                <li className="ml-auto">
                    <span className="hover:cursor-pointer" onClick={() => {setButton("about")}}>sobre</span>
                </li>
                <li>
                    <span className="hover:cursor-pointer" onClick={() => {setButton("contact")}}>contato</span>
                </li>
            </ul>
        </>
    )
}