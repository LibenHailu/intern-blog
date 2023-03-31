import { Row } from "react-bootstrap";
import { OnDeleteType } from "../layouts/BlogContainer";
import BlogItem from "./BlogItem";
export type Blog = {
  title: String;
  img: string;
  author: string;
  description: string;
};
interface BlogListProps {
  blogs: Blog[];
  onDelete: OnDeleteType;
}
const BlogList = ({ blogs, onDelete }: BlogListProps) => {
  return (
    // <h1>

    //   <BlogList blogs={blogs} onDelete={onDelete} />
    // </h1>
    <Row>
      {blogs.map((blog: Blog, index: number) => {
        return <BlogItem blog={blog} index={index} onDelete={onDelete} />;
      })}
    </Row>
  );
};

export default BlogList;
