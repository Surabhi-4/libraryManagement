import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddBook.css"; // import external CSS

function AddBook() {
  const [formData, setFormData] = useState({ title: "", author: "", year: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/books", formData)
      .then(() => navigate("/"))
      .catch(err => console.error(err));
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="book-form">
        <h2>Add New Book</h2>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author Name"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="year"
          placeholder="Publication Year"
          onChange={handleChange}
          required
        />
        <button type="submit">➕ Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
