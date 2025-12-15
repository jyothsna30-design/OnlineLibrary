
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import './styles.css'

function Homepage(){

  const books = useSelector((state) => state.books);
  //getting books data and placing in popular books that are rating >=4.7
  const popularBooks = books.filter(book => book.rating >= 4.7).slice(0, 4);
     //Welcome message and links to books category, popular books cards
    return(<>
    <div id="wel" className="border-2 w-auto m-6 h-50 rounded-lg p-7 text-red-950 text-center text-5xl bg-amber-300">
    <h1>Welcome to OLibrary</h1>
    <h3>Nothing is pleasanter than exploring a library</h3>
    </div>
    
    <div className="flex border-2 rounded-lg bg-amber-600 text-2xl justify-between text-amber-50">
       <Link to="/browsebooks/Fiction" >Fiction</Link>
       <Link to="/browsebooks/Non-Fiction" >Non-Fiction</Link>
       <Link to="/browsebooks/Sci-Fi" >Sci-Fi</Link>
       <Link to="/browsebooks/Romance" >Romance</Link>
       <Link to="/browsebooks/Mystery" >Mystery</Link>
       <Link to="/browsebooks/Poetry" >Poetry</Link>
       
    </div>
   
  
    <h1 className="text-4xl bg-amber-200 inline-block ml-140 text-center mt-7 text-amber-950 blink">Popular Books</h1>
    <div className="flex flex-wrap ">
        
        {popularBooks.map((p)=>{
           return( <div className="m-20 bg-gray-100" key={p.id}>
           <div className="border-2 rounded-lg w-60 h-80 bg-gray-100 hover:scale-110" key={p.id}>
            
            <img src={p.src} className="w-70 h-55"></img>
            <h2 className="text-xl font-bold text-blue">{p.title}</h2>
            <h2 className="text-xl text-blue">Author:{p.author}</h2>
            <Link to={`/viewdetails/${p.id}`} className="underline text-red-500">View Details</Link>
            </div>
            </div>)
        })}
    </div>
    
    
</>)
}
export default Homepage