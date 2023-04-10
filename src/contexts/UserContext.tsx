import { ReactNode, useEffect, useState } from "react"
import { createContext } from "react";
import { IUserContext, IUserCreate, IUserLogin, IUserResponse } from "../types"
import { api } from "../service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext<IUserContext>({
    login_register: false,
    setlogin_register: () => {},
    user: undefined,
    button: "clients",
    setButton: () => {},
    createUserSubmit: () => {},
    loginUserSubmit: () => {},
    exitAccout: () => {},
    getToProfile: () => {}
})

export const UserProvider = ({children}: { children: ReactNode }) => {
    const [login_register, setlogin_register] = useState<boolean>(false)
    const [user, setUser] = useState<IUserResponse>()
    const [button, setButton] = useState<string>("listClients")
    const navigate = useNavigate()
    
    const getToProfile = () => {
        const token = localStorage.getItem("@token")
        const tokenParse = JSON.parse(token!)
        api.get("user/profile", {
            headers: {
                Authorization: tokenParse
            }
        }).then((response) => {
            setUser(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        const token = localStorage.getItem("@token")
        const tokenParse = JSON.parse(token!)
        
        if (tokenParse) {
            api.get("user/profile", {
                headers: {
                    Authorization: tokenParse
                }
            }).then((response) => {
                setUser(response.data)
                navigate("/home", { replace: true })
            }).catch((error) => {
                console.log(error)
            })
        } else {
            navigate("/login", { replace: true })
        }
    }, [navigate, setUser]) 

    const createUserSubmit = (data: IUserCreate) => {
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
            localStorage.setItem("@token", JSON.stringify(response.data.token))
            getToProfile()
            navigate("/home", {replace: true})
            toast.success("Bem vindo(a)!")
        })
        .catch((error) => {
            toast.error("Email ou senha errados.")
        } )
    }

    const exitAccout = () => {
        localStorage.removeItem("@token")
        navigate("/login", {replace: true})
    }


    return (
        <UserContext.Provider value={{login_register, setlogin_register, createUserSubmit, loginUserSubmit, user, exitAccout, getToProfile, button, setButton}}>
            {children}
        </UserContext.Provider>
    )
}