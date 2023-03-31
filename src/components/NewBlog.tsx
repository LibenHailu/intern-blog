import { Blog } from "./BlogList";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
interface NewBlogProps {
  addBlog: (blog: Blog) => void;
}
const NewBlog = ({ addBlog }: NewBlogProps) => {
  const [author, setAuthor] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescr] = useState("");
  const [title, setTitle] = useState("");

  const onAddBlog = () => {
    const blog: Blog = { title, description, img, author };
    addBlog(blog);
    setAuthor("");
    setDescr("");
    setImg("");
    setTitle("");
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="author">
        <Form.Label>Author</Form.Label>
        <Form.Control
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
          type="text"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="titleId">
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="descId">
        <Form.Label>description</Form.Label>
        <Form.Control
          value={description}
          onChange={(e) => {
            setDescr(e.target.value);
          }}
          type="text"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="descId">
        <Form.Label>Image Url</Form.Label>
        <Form.Control
          value={img}
          onChange={(e) => {
            setImg(e.target.value);
          }}
          type="text"
        />
      </Form.Group>
      <Button onClick={onAddBlog}>Add</Button>
    </Form>
  );
};
export default NewBlog;
