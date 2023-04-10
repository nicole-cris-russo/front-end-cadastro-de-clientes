import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { IClientResponse } from "../../types"
import { ClientContext } from "../../contexts/ClientContext"

export const ClientCard = ({data}: {data: IClientResponse}) => {
    const { deleteClient } = useContext(ClientContext)

    return (
        <div className="border-2 border-branco rounded p-4 flex justify-between items-start bg-laranja">
            <div className="flex flex-col gap-2">
                <span>Nome: {data.fullName}</span>
                <span>Email: {data.email}</span>
                <span>Telefone: {data.phone}</span>
            </div>
            <button className="px-2 py-1 bg-azul text-branco rounded" onClick={() => {deleteClient(data.id)}}>Deletar Cliente</button>
        </div>
    )
}