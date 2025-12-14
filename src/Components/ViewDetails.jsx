import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function ViewDetails() {
  const { id } = useParams();

   const book = useSelector(state =>
    state.books.find(b => b.id === id)
  );

  if (!book) return <p>Book not found</p>;

  return (
    <>
      <div className="w-60 h-70 ml-125 mt-5 hover:scale-110">
      <img className="w-60 h-70" src={book.src}></img></div>
      <div className="w-80 h-60 font-bold ml-125 mt-5">
      <h2>Title:{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Description:{book.description}</p>
      <p >Rating: {book.rating}</p>
     

      <Link to={`/browsebooks/${book.category}` } className="underline text-red-950">Back to Browse</Link>
      </div>
    </>
  );
}

export default ViewDetails;

  
   