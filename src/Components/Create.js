import { useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import { Button, Form } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';

const Create = () => {
  const [data, setData] = useState({
    title: "",
    author: "",
    body: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/blogs', data)
      .then(res => {
        toast.success("New blog added successfully", {
          position: "top-right",
          autoClose: 3000,
        });
        setData({ title: "", author: "", body: "" }); // Clear form
      })
      .catch(err => {
        toast.error("An error occurred while adding the blog", {
          position: "top-right",
          autoClose: 3000,
        });
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title:</Form.Label>
        <Form.Control
          name="title"
          type="text"
          value={data.title}
          onChange={handleChange}
          placeholder="Enter the title"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAuthor">
        <Form.Label>Author:</Form.Label>
        <Form.Control
          name="author"
          type="text"
          value={data.author}
          onChange={handleChange}
          placeholder="Enter the author"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBody">
        <Form.Label>Body:</Form.Label>
        <Form.Control
          name="body"
          as="textarea"
          rows={3}
          value={data.body}
          onChange={handleChange}
          placeholder="Write your blog content here..."
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Save blog
      </Button>
    </Form>
  );
};

export default Create;
