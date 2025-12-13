import {useLocation} from "react-router-dom"
import { Link } from "react-router-dom";
function NoFound(){

    const location = useLocation();

  return (<>
      <div>
        <h1>404 Page Not Found</h1>
        <p>Page "{location.pathname}" is not correct url</p>
        <Link to="/">Go Back Home</Link>
      </div>
  </>)
}
export default NoFound