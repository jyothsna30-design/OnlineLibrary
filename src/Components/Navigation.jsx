
import { Link } from "react-router-dom"
import './styles.css'
function Navigation(){
    return(<><nav>
        <h2>OLibrary</h2>
        <div className="link">
        <Link className="link1" to="/" >Home</Link>
        <Link className="link1" to="/browsebooks" >Browse Books</Link>
        <Link className="link1" to="/addbooks" >Add Books</Link>
        </div>
        </nav></>)
}
export default Navigation