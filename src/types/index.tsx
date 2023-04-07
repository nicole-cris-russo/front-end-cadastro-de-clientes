import { JSXElementConstructor, MouseEventHandler, ReactElement, ReactFragment, ReactPortal } from "react"

export interface IButton { 
    bg_color?: string
    txt_color?: string
    text?: string
    event?: MouseEventHandler<HTMLButtonElement> | undefined 
}

export interface IUserContext {
    login_register: boolean
    setlogin_register: (value: boolean) => void;
    createUserSubmit: (value: IUserCreate) => void
    loginUserSubmit: (value: IUserLogin) => void
}

export interface IUserCreate {
    fullName: string
    email: string
    password: string
}

export interface IUserLogin {
    email: string
    password: string
}

export interface IDivLeft {
    flex_position?: string
    children?: React.ReactNode;
}