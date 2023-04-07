import { ReactNode, useState } from "react"
import { createContext } from "react";
import { IUserContext, IUserCreate, IUserLogin } from "../types"
import { api } from "../service";
import { toast } from "react-toastify";

export const UserContext = createContext<IUserContext>({
    login_register: false,
    setlogin_register: () => {},
    createUserSubmit: () => {},
    loginUserSubmit: () => {}
})

export const UserProvider = ({children}: { children: ReactNode}) => {
    const [login_register, setlogin_register] = useState<boolean>(false)

    const createUserSubmit = (data: IUserCreate) => {
        console.log(data)
        api.post("user", data)
        .then((response) => { 
            toast.success("Cadastrado! Faça o login.")
        })
        .catch((error) => {
            toast.error("Email já cadastrado.")
        } )
    }

    const loginUserSubmit = (data: IUserLogin) => {
        api.post("session", data)
        .then((response) => {
            toast.success("Bem vindo(a)!")
            localStorage.setItem("@token:", JSON.stringify(response.data.token))
        })
        .catch((error) => {
            toast.error("Email ou senha errados.")
        } )
    }


    return (
        <UserContext.Provider value={{login_register, setlogin_register, createUserSubmit, loginUserSubmit}}>
            {children}
        </UserContext.Provider>
    )
}