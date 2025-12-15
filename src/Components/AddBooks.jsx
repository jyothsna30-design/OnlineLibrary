import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../Components/BookSlice.jsx";
import { useNavigate } from "react-router-dom";

function AddBooks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
//Setting form input values
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    src:"",
    description: "",
    rating: "",
  });


  const handleSubmit = (e) => {
    e.preventDefault();

    //if some values of form are empty,it will show alert msg
    if (Object.values(form).some(v => v === "")) {
      alert("All fields are required");
      return;
    }
     //adding a new book and displaying in the browse books with matching category
    dispatch(addBook({ ...form, id: Date.now().toString() }));
    navigate(`/browsebooks/${form.category}`);
  };
    //form declaration
  return (
    <div className="flex flex-row w-110 border-2 rounded-lg bg-amber-100 ml-100 mt-5">
    <form onSubmit={handleSubmit} >
      <span className="text-xl font-bold ml-6">Title:</span><input className="border-2 rounded-lg m-5" placeholder="Title" onChange={e => setForm({...form, title: e.target.value})} /><br></br>
      <span className="text-xl font-bold ml-6">Author:</span><input className="border-2 rounded-lg m-5" placeholder="Author"  onChange={e => setForm({...form, author: e.target.value})} /><br></br>
      <span className="text-xl font-bold ml-5">Category:</span><select className="border-2 rounded-lg m-5" onChange={e => setForm({...form, category: e.target.value})}>
  <option selected>Fiction</option>
  <option>Non-Fiction</option>
  <option>Romance</option>
  <option>Mystery</option>
  <option>Poetry</option>
  <option>Sci-Fi</option>
</select><br></br>
      <span className="text-xl font-bold ml-5">Image:</span><input className="border-2 rounded-lg m-5" placeholder="imageurl" onChange={e => setForm({...form, src: e.target.value})} />
      <h2 className="text-xl font-bold ml-5">Description:</h2><textarea className="border-2 rounded-lg m-5 h-20 w-50" placeholder="Description" onChange={e => setForm({...form, description: e.target.value})} /><br></br>
      <span className="text-xl font-bold ml-5">Rating:</span><input className="border-2 rounded-lg m-5" type="number" placeholder="Rating" onChange={e => setForm({...form, rating: e.target.value})} /><br></br>
      <h4>Image Preview</h4> 
      {form.src && (
          <img
            src={form.src}
            alt="Preview"
            className="w-40 h-40 object-cover rounded mt-2 border"
            onError={(e) => {
              e.target.src = "/images/default.png"; 
            }}
            />
        )}

      <button className="border-2 font-semibold rounded-lg m-5 w-20 bg-amber-500 hover:scale-110">Add Book</button>
    </form>
    
    </div>

  );
  
}


export default AddBooks;

