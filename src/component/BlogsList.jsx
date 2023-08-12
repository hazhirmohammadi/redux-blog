import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const BlogsList = () => {
   const blogs = useSelector(state => state.blogs)
   const renderedBlogs = blogs.map(blog=>(
       <article className="blog-excerpt bg_block">
          <h3 className="teal">{blog.title}</h3>
          <p className="blog-content green">{blog.content.substring(0,100)}</p>
          <Link to={`/blogs/${blog.id}`} className="button muted-button ">
             <a>See more</a>
          </Link>
       </article>
   ));
   return (
       <section className="blogs-list">
          <h2>All Post</h2>
          {renderedBlogs}
       </section>
   )
}
export default BlogsList;