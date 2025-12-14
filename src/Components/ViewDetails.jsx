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
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>{book.description}</p>
      <p>Rating: {book.rating}</p>

      <Link to={`/browsebooks/${book.category}`}>Back to Browse</Link>
    </>
  );
}

export default ViewDetails;

  
   