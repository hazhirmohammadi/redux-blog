import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectAllBlogs } from "../reducers/blogSlice";
import ShowTime from "./ShowTime";
import ShowAuthor from "./ShowAuthor.jsx";

const BlogsList = () => {
   const blogs = useSelector(selectAllBlogs);

   const navigate = useNavigate();

   const orderedBlogs = blogs
       .slice()
       .sort((a, b) => b.date.localeCompare(a.date));

   const renderedBlogs = orderedBlogs.map((blog) => (
       <article key={blog.id} className="blog-excerpt">
          <h3>{blog.title}</h3>

          <div style={{ marginTop: "10px", marginRight: "20px" }}>
             <ShowTime timestamp={blog.date} />
             <a className="m bg_amber p1 radius"><ShowAuthor userId={blog.user}/></a>
          </div>

          <p className="blog-content">{blog.content.substring(0, 100)}</p>

          <Link to={`/blogs/${blog.id}`} className="button muted-button">
             see more
          </Link>
       </article>
   ));

   return (
       <section className="blog-list">
          <button
              className="full-button accent-button"
              style={{
                 marginTop: "1em",
              }}
              onClick={() => navigate("/blogs/create-blog")}
          >
            Create new post
          </button>
          <h2>see All post</h2>
          {renderedBlogs}
       </section>
   );
};

export default BlogsList;