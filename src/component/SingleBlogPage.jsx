import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const SingleBlogPage = () => {
   const {blogId} = useParams();

   const blog = useSelector(
       state => state.blogs.find(blog => blog.id === blogId)
   );
   if (!blog){
      return (
          <section className="text-center">
             <h2 className="" style={{color:"teal"}}>this is post not found🔎</h2>
          </section>
      )
   }
   return (
       <section>
          <article className="blog">
             <h2>{blog.title}</h2>

             <p className="blog-content">{blog.content}</p>
          </article>
       </section>
   )
};
export default SingleBlogPage;