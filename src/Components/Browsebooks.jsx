import { useParams } from "react-router-dom"
//import { data1 } from '/src/utilis/data.js'
import { useState } from "react";
import {Link} from "react-router-dom"

function Browsebooks(){
    const data1 = [
   {id:1, title: "Hawer",author: "joseph",src:"./src/Components/image.png", category:"Fiction"},
   {id:2, title: "Power",author: "joseph",src:"./src/Components/image.png", category:"Non-Fiction"},
    {id:3, title: "Power",author: "joseph",src:"./src/Components/image.png", category:"Sci-Fi"},
    {id:4, title: "Power",author: "joseph",src:"./src/Components/image.png", category:"Romance"},
     {id:5, title: "Power",author: "joseph",src:"./src/Components/image.png", category:"History"},
 {id:6, title: "Power",author: "joseph",src:"./src/Components/image.png", category:"Fiction"},
 {id:7, title: "Power",author: "joseph",src:"./src/Components/image.png", category:"Fiction"},
  {id:8, title: "Power",author: "joseph",src:"./src/Components/image.png", category:"Fiction"},
 {id:9, title: "Power",author: "joseph",src:"./src/Components/image.png", category:"Fiction"},


]
    const {category} =useParams();
    
    const [search,setSearch] = useState("");
    const filteredBooks = data1.filter((b) => {
    const matchesCategory = category ? b.category == category : true;
    console.log(matchesCategory)
    const matchesSearch =
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase());
     

    return matchesCategory && matchesSearch;
  });
  {console.log(filteredBooks)}
    return(<>
             <h1>Browse Books</h1>
             {category && <h3>Category: {category}</h3>}
             <input
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        
      />
      <div>
       
        {filteredBooks.map(book=> {
            return(
            <div key={book.id}>
              <h3>{book.title}</h3>
              <img src="book.src"></img>
              <Link to="/viewdetails/${book.id}">View Details</Link>
            </div>)
                
        }
            )}
      </div>
        </>)
}
export default Browsebooks