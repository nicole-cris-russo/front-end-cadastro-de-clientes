import { useContext } from "react"
import { ClientContext } from "../../contexts/ClientContext"
import { ClientCard } from "./ClientCard"

export const Clients = () => {
    const { clients } = useContext(ClientContext)

    return (
        <div className="w-full h-full flex flex-col gap-5 px-5 py-5 bg-laranja-claro">
            {
                clients?.map((client, index) => (
                    <ClientCard key={index} data={client}></ClientCard>
                ))
            }
        </div>
    )
}