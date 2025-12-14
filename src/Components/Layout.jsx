import { Outlet } from "react-router-dom"
import Navigation from "./Navigation"

function Layout(){
    return(<>
    <Navigation></Navigation>
    <Outlet></Outlet>
    </>)
}
export default Layout