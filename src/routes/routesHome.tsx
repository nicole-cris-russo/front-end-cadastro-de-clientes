import { Navigate, Route, Routes } from "react-router-dom";
import { About } from "../components/About";
import { Clients } from "../components/Clients"
import { Contact } from "../components/Contact";
import { Profile } from "../components/Profile";

export const RoutesHome = () => {
    return(
        <Routes>
            <Route path="/home/sobre" element={<About></About>}></Route>
                <Route path="/home/clientes" element={<Clients></Clients>}></Route>
                <Route path="/home/contato" element={<Contact></Contact>}></Route>
                <Route path="/home/profile" element={<Profile></Profile>}></Route>
            <Route path="*" element={<Navigate to="/home/sobre"></Navigate>}></Route>
        </Routes>
    )
}