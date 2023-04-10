import { JSXElementConstructor, MouseEventHandler, ReactElement, ReactFragment, ReactPortal } from "react"

export interface IUserContext {
    login_register: boolean
    setlogin_register: (value: boolean) => void;
    user: undefined | IUserResponse
    button: string
    setButton: (value: string) => void
    createUserSubmit: (value: IUserCreate) => void
    loginUserSubmit: (value: IUserLogin) => void
    exitAccout: () => void
    getToProfile: () => void
}

export interface IClientContext {
    createClient: (value: IClientCreate) => void
    modal: boolean
    setModal: (value: boolean) => void
    clients: undefined | IClientResponse[]
    setClients: (value: IClientResponse[]) => void
    deleteClient: (value: string) => void
    listClients: () => void
}

export interface IClientCreate {
    fullName: string
    email: string
    phone: string
}

export interface IUserCreate {
    fullName: string
    email: string
    password: string
}

export interface IButton { 
    bg_color?: string
    txt_color?: string
    text?: string
    event?: MouseEventHandler<HTMLButtonElement> | undefined 
}

export interface IUserLogin {
    email: string
    password: string
}

export interface IUserResponse {
    id: string
	fullName: string
	email: string
	password: string
	isAdm: boolean,
	created_at: Date
	updated_at: Date
	clients: Array<IClientResponse>
}

export interface IClientResponse {
    id: string
    fullName: string
    email: string
    phone: string
    created_at: Date
    updated_at: Date
    contacts: []
    user: {
        id: string
        fullName: string
        email: string
        password: string
        isAdm: boolean,
        created_at: Date
        updated_at: Date
    }
}

export interface IContactReponse {
    id: string
	fullName: string
	email: string
	phone: string
	created_at: Date
	updated_at: Date
	client?: {}
}

export interface IDivLeft {
    flex_position?: string
    children?: React.ReactNode;
}