import { useContext, useEffect } from "react"
import { DivLeft } from "../components/DivLeft"
import { DivRight } from "../components/DivRight"
import { Login } from "../components/Login"
import { Register } from "../components/Register"
import { Title } from "../components/Title"
import { UserContext } from "../contexts/UserContext"

export const Session = () => {
    const {login_register, getToProfile} = useContext(UserContext)

    return (
        <>
        <DivLeft flex_position="justify-center items-center">
            {login_register ?
            <Login></Login> :
            <Register></Register>}
        </DivLeft>
        <DivRight>
            <Title></Title>
        </DivRight>
        </>
    )
}