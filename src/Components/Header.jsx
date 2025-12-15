import { Outlet } from "react-router-dom"
import Navigation from "./Navigation"


//Navigation bar and outlet for changing pages
function Header(){
    return(<>
    <Navigation></Navigation>
    <Outlet></Outlet>
    </>)
}
export default Header