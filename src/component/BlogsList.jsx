import {useSelector} from "react-redux";
import {Link,useNavigate} from "react-router-dom";
import {selectAllBlogs} from "../reducers/blogSlice.js";

const BlogsList = () => {
   const navigeat=useNavigate();
   const blogs = useSelector(selectAllBlogs);
   const renderedBlogs = blogs.map(blog=>(
       <article key={blog.id} className="blog-excerpt bg_block">
          <h3 className="teal">{blog.title}</h3>
          <p className="blog-content green">{blog.content.substring(0,100)}</p>
          <Link to={`/blogs/${blog.id}`} className="button muted-button ">
             <a>See more</a>
          </Link>
       </article>
   ));
   return (
       <section className="blogs-list ">
          <button
              className="button radius mt "
              onClick={()=>navigeat("/blogs/create-blog")}
          >
             Create New Post
          </button>
          <h2>All Post</h2>
          {renderedBlogs}
       </section>
   )
}
export default BlogsList;