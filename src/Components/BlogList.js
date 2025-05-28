import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {
  return (
    <div>
      <h2>{title}</h2>
        {blogs.map((blog) => {
        return (
            <div className="preview" key={blog.id}>
            <Link to={`/BlogDetails/${blog.id}`}>
                <h3>{blog.title}</h3>
                <p>done by: {blog.author}</p>
            </Link>
            </div>
        );
        })}

    </div>
  );
};

export default BlogList;


