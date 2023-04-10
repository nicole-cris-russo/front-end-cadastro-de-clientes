import { ReactNode, createContext, useEffect, useState } from "react";
import { IClientContext, IClientCreate, IClientResponse } from "../types";
import { api } from "../service";
import { toast } from "react-toastify";

export const ClientContext = createContext<IClientContext>({
    createClient: () => {},
    modal: false,
    setModal: () => {},
    clients: undefined,
    setClients: () => {},
    deleteClient: () => {},
    listClients: () => {}
})

export const ClientProvider = ({children}: {children: ReactNode}) => {
    const [modal, setModal] = useState<boolean>(false)
    const [clients, setClients] = useState<IClientResponse[]>()

    const deleteClient = (id: string) => {
        const token = localStorage.getItem("@token")
        const tokenParse = JSON.parse(token!)
        api.delete(`client/${id}`, {
            headers: {
                Authorization: tokenParse
            }
        })
        .then((response) => {
            toast.success("Cliente deletado.")
        }).catch((error) => {
            toast.error(error.response.data.message)
        })
    } 

    const createClient = (data: IClientCreate) => {
        const token = localStorage.getItem("@token")
        const tokenParse = JSON.parse(token!)
        api.post("client", data, {
            headers: {
                Authorization: tokenParse
            }
        })
        .then((response) => {
            setModal(false)
            toast.success("Cliente criado, visualize na sua lista.")
        }).catch((error) => {
            toast.error(error.response.data.message)
        })
    }

    const listClients = () => {
        const token = localStorage.getItem("@token")
        const tokenParse = JSON.parse(token!)
        api.get("user/clients", {
            headers: {
                Authorization: tokenParse
            }
        }).then((response) => {
            setClients(response.data)
        }).catch((error) => {
        })
    }

    useEffect(() => {listClients()}, [createClient, setClients])

    return (
        <ClientContext.Provider value={{createClient, modal, setModal, clients, setClients, deleteClient, listClients}}>
            {children}
        </ClientContext.Provider>
    )
}