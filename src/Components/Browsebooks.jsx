import { useParams } from "react-router-dom"
import { useState } from "react";
import {Link} from "react-router-dom"
import { useSelector } from "react-redux";


function Browsebooks(){
  //getting books array from state
  const books = useSelector((state) => state.books);
  //getting urlid from useParams
    const {category} =useParams();
    const [search,setSearch] = useState("");

    //getting searched books if books category is included and title or author is present
   const filteredBooks = books.filter(book =>
    book.category === category &&
    (book.title.toLowerCase().includes(search.toLowerCase()) ||
     book.author.toLowerCase().includes(search.toLowerCase()))
     
);
  
  //displaying the browse books 
    return(<>
             <h1 className="text-center text-4xl text-amber-950 font-extrabold">Browse Books</h1>
             {category && <h3 className="text-center text-3xl text-amber-950">{category} Books</h3>}
             <input className="border-2 bg-gray-50 ml-125 mt-5 rounded-lg w-60" type="text" placeholder="Search by title or author..." value={search} onChange={(e) => setSearch(e.target.value)}
        
      />
      
      <div className="flex flex-wrap w-300 h-100"> 
       
        {filteredBooks.map(book => (
        <div className="border-2 rounded-lg m-10 w-50 bg-amber-200 hover:scale-110" key={book.id}>
          <img src={book.src} className="w-50 h-45"></img>
          <h3 className="font-bold mt-1">{book.title}</h3>
          <p>Author: {book.author}</p>
          <Link to={`/viewdetails/${book.id}`} className="underline text-red-500">View Details</Link>
        </div>
      ))}
          
      </div>
        </>)
}
export default Browsebooks