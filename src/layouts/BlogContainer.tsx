import Container from "react-bootstrap/Container";
import Blogs, { Blog } from "../components/BlogList";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import blogs from "../data/blogs.json";
import BlogForm from "../components/NewBlog";
import Navbar from "./Navbar";

export type OnDeleteType = (index: number) => void;

function BlogContainer() {
  const [allBlogs, setAllBlogs] = useState<Blog[]>(blogs);
  const AddBlog = (blog: Blog) => {
    setAllBlogs([blog, ...allBlogs]);
  };
  const deleteBlog: OnDeleteType = (index: number) => {
    setAllBlogs(
      allBlogs.filter((blog, i) => {
        return index !== i;
      })
    );
  };
  return (
    <div>
      <Navbar />
      <Container className="mt-5 ">
        <Row>
          <Col md="12" lg="8">
            <Blogs blogs={allBlogs} onDelete={deleteBlog} />
          </Col>
          <Col md="12" lg="4">
            {" "}
            <BlogForm addBlog={AddBlog} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BlogContainer;
