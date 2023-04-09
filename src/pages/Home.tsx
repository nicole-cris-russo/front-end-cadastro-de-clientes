import { DivLeft } from "../components/DivLeft"
import { DivRight } from "../components/DivRight"
import { NavBar } from "../components/NavBar"

export const Home = () => {
    return (
    <>
        <DivLeft flex_position="flex-col justify-between">
            <NavBar></NavBar>
        </DivLeft>
        <DivRight>

        </DivRight>
    </>
    )
}