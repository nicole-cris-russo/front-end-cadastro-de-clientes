import { useContext } from "react"
import { DivLeft } from "../components/DivLeft"
import { DivRight } from "../components/DivRight"
import { NavBar } from "../components/NavBar"
import { UserContext } from "../contexts/UserContext"
import { Clients } from "../components/client/Clients"
import { About } from "../components/About"
import { Profile } from "../components/Profile"
import { Contact } from "../components/Contact"
import { ClientContext } from "../contexts/ClientContext"
import { ModalRegisterClient } from "../components/client/ModalRegisterClient"

export const Home = () => {
    const {button} = useContext(UserContext)
    const {modal} = useContext(ClientContext)

    let content
    let modalClient

    if (button === "listClients") {
        content = <Clients></Clients>
    } else if (button === "about") {
        content = <About></About>
    } else if (button === "profile") {
        content = <Profile></Profile>
    } else if (button === "contact") {
        content = <Contact></Contact>
    }

    if (modal) {
        modalClient = <ModalRegisterClient></ModalRegisterClient>
    } else {
        modalClient = null
    }

    return (
    <>
        <DivLeft flex_position="flex-col justify-between">
            <NavBar></NavBar>
        </DivLeft>
        <DivRight>
            {content} {modalClient}
        </DivRight>
    </>
    )
}