
import { Link } from "react-router-dom"
import './styles.css'

function Homepage(){
    
    const popularBooks= [{
    id: "1",
    title: "Dune",
    author: "Frank Herbert",
    category: "Sci-Fi",
    description: "Epic science fiction novel.",
    src:"./src/Components/images/dune.jpg",
    rating: 4.8,
  },
  {
    id: "2",
    title: "1984",
    author: "George Orwell",
    category: "Fiction",
    src:"./src/Components/images/1984.jpg",
    description: "Dystopian novel.",
    rating: 4.7,
  },
                          {
    id: "3",
    title: "Technically yours",
    author: "Denise williams",
    category: "Romance",
    src:"./src/Components/images/1984.jpg",
    description: "Dystopian novel.",
    rating: 4.7,
  },
  {
    id: "4",
    title: "Agatha Oddly",
    author: "Lena Jones",
    category: "Mystery",
    src:"./src/Components/images/agatha.jpg",
    description: "Dystopian novel.",
    rating: 4.7,
  },{
    id: "5",
    title: "the sun and her flowers",
    author: "Rupi kaur",
    category: "Poetry",
    src:"./src/Components/images/sun.jpg",
    description: "Dystopian novel.",
    rating: 4.7,
  },
  {
    id: "6",
    title: "Petals of healing",
    author: "Anne raynoe",
    category: "Poetry",
    src:"./src/Components/images/agatha.jpg",
    description: "Dystopian novel.",
    rating: 4.7,
  }]
     
    return(<>
    <div className="border-2 w-auto m-6 h-50 rounded-lg p-7 text-center text-5xl bg-amber-300">
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
           return( <div className="m-20 bg-gray-100">
           <div className="border-2 rounded-lg w-60 h-80 bg-gray-100 hover:scale-110" key={p.id}>
            
            <img src={p.src} className="w-70 h-55"></img>
            <h2 className="text-xl font-bold text-blue">{p.title}</h2>
            <h2 className="text-xl text-blue">Author:{p.author}</h2>
            </div>
            </div>)
        })}
    </div>
    
    
</>)
}
export default Homepage