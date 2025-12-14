import { useParams } from "react-router-dom"
import { useState } from "react";
import {Link} from "react-router-dom"
import { useSelector } from "react-redux";


function Browsebooks(){
  const books = useSelector((state) => state.books);
  console.log(books);
    const {category} =useParams();
    const [search,setSearch] = useState("");

   const filteredBooks = books.filter(book =>
    book.category === category &&
    (book.title.toLowerCase().includes(search.toLowerCase()) ||
     book.author.toLowerCase().includes(search.toLowerCase()))
     
);
{console.log(filteredBooks)}
   
    return(<>
             <h1 className="text-center text-3xl text-amber-950 font-extrabold">Browse Books</h1>
             {category && <h3 className="text-center text-3xl text-gray-300">{category} Books</h3>}
             <input className="border-2 bg-gray-50"
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        
      />
      <div className="flex w-200 h-100"> 
       
        {filteredBooks.map(book => (
        <div className="border-2 rounded-lg m-10 bg-amber-200" key={book.id}>
          <img src={book.src}></img>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <a href={`/book/${book.id}`}>View Details</a>
        </div>
      ))}
          
      </div>
        </>)
}
export default Browsebooks