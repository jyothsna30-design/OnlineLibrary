import {useLocation} from "react-router-dom"
import { Link } from "react-router-dom";
import './styles.css'
function NoFound(){

    const location = useLocation();

  return (<>
      <div className="error">
        
        <h1>404 Page Not Found</h1>
        <p>Page "{location.pathname}" is not correct url</p>
        <Link to="/" className="underline text-red-950">Go Back Home</Link>

      </div>
  </>)
}
export default NoFound