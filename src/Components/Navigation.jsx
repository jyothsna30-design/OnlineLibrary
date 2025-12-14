
import { Link } from "react-router-dom"

function Navigation(){
    return(<nav className="flex border-2 bg-amber-600 h-15">
        <h2 className="mr-170 font-extrabold text-black text-5xl">OLibrary</h2>
        <div className="mt-4">
        <Link className="mr-3 text-xl" to="/" >Home</Link>
        <Link className="mr-3 text-xl" to="/browsebooks/Fiction" >BrowseBooks</Link>
        <Link className="mr-3 text-xl" to="/addbooks" >AddBooks</Link>
        </div>
        </nav>)
}
export default Navigation