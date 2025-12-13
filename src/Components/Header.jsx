import { Outlet } from "react-router-dom"
import Navigation from "./Navigation"

function Header(){
    return(<>
    <Navigation></Navigation>
    <Outlet></Outlet>
    </>)
}
export default Header