
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./EditBook.css"; // Import CSS

function EditBook() {
  const [formData, setFormData] = useState({ title: "", author: "", year: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/books/${id}`)
      .then(res => setFormData(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/books/${id}`, formData)
      .then(() => navigate("/"))
      .catch(err => console.error(err));
  };

  return (
    <div className="edit-form-container">
      <form onSubmit={handleSubmit} className="edit-book-form">
        <h2>Edit Book</h2>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Book Title"
          required
        />
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Author Name"
          required
        />
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
          placeholder="Year"
          required
        />
        <button type="submit">💾 Update Book</button>
      </form>
    </div>
  );
}

export default EditBook;
