
import { Link } from "react-router-dom"
function Homepage(){
    
    const popularBooks= [{id:1,
                          title: "The Power of Mind",
                          author:"Joesph Murphy",
                        src:"./src/Components/image.png"},
                        {id:2,
                          title: "The Power of Mind",
                          author:"Joesph Murphy",
                        src:"image.png"},
                         {id:3,
                          title: "The Power of Mind",
                          author:"Joesph Murphy",
                        src:"./image.png"},
                        {id:4,
                          title: "The Power of Mind",
                          author:"Joesph Murphy",
                        src:"image.png"}]
    
    return(<>
    <div className="welcome">
    <h1>Welcome to OLibrary</h1>
    <h3>Nothing is pleasanter than exploring a library</h3>
    </div>
    
    <div>
       <Link to="/browsebooks/Fiction" >Fiction</Link>
       <Link to="/browsebooks/Non-Fiction" >Non-Fiction</Link>
       <Link to="/browsebooks/Sci-Fi" >Sci-Fi</Link>
       <Link to="/browsebooks/Romance" >Romance</Link>
       <Link to="/browsebooks/Mystery" >Mystery</Link>
       <Link to="/browsebooks/Poetry" >Poetry</Link>
       
    </div>
   

    <h1>Popular Books</h1>
    <div className="pop">
        
        {popularBooks.map((p)=>{
           return( <div className="dis" key={p.id}>
            
            <img src={p.src} height="300" width="300"></img>
            <h2>{p.title}</h2>
              <h3>By</h3>
            <h2>{p.author}</h2>
            </div>)
        })}
    </div>
    
    
</>)
}
export default Homepage