import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../Components/BookSlice.jsx";
import { useNavigate } from "react-router-dom";

function AddBooks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(form).some(v => v === "")) {
      alert("All fields are required");
      return;
    }

    dispatch(addBook({ ...form, id: Date.now().toString() }));
    navigate(`/browsebooks/${form.category}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" onChange={e => setForm({...form, title: e.target.value})} />
      <input placeholder="Author" onChange={e => setForm({...form, author: e.target.value})} />
      <input placeholder="Category" onChange={e => setForm({...form, category: e.target.value})} />
      <textarea placeholder="Description" onChange={e => setForm({...form, description: e.target.value})} />
      <input type="number" placeholder="Rating" onChange={e => setForm({...form, rating: e.target.value})} />
      <button>Add Book</button>
    </form>
  );
}


export default AddBooks;