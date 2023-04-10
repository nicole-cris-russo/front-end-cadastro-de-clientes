import { Navigate, Route, Routes } from "react-router-dom";
import { Session } from "../pages/Session";
import { Home } from "../pages/Home";

export const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/login" element={<Session></Session>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="*" element={<Navigate to="/login"></Navigate>}></Route>
        </Routes>
    )
}