import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import { OnDeleteType } from "../layouts/BlogContainer";
import { Blog } from "./BlogList";
interface BlogProps {
  index: number;
  blog: Blog;
  onDelete: OnDeleteType;
}
const BlogItem = ({ blog, onDelete, index }: BlogProps) => {
  return (
    <Col md="4" className="mb-4">
      <Card style={{ height: "500px" }}>
        <Card.Img variant="top" src={blog.img} />
        <Card.Body>
          <Card.Title className="text-truncate--2">{blog.title}</Card.Title>
          <Card.Text className="text-truncate--4">{blog.description}</Card.Text>
          <Card.Text>{blog.author}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button onClick={() => onDelete(index)} variant="danger">
              Delete
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};
export default BlogItem;
