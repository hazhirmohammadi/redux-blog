import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { blogDeleted, selectBlogById } from "../reducers/blogSlice";

const SingleBlogPage = () => {
   const { blogId } = useParams();

   const blog = useSelector((state) => selectBlogById(state, blogId));

   const navigate = useNavigate();
   const dispatch = useDispatch();

   if (!blog) {
      return (
          <section>
             <h2>this is npt found 🤗</h2>
          </section>
      );
   }

   const handleDelete = () => {
      if (blog) {
         dispatch(blogDeleted({ id: blog.id }));
         navigate("/");
      }
   };

   return (
       <section>
          <article className="blog">
             <h2>{blog.title}</h2>

             <p className="blog-content">{blog.content}</p>

             <Link to={`/editBlog/${blog.id}`} className="button">
                Edit
             </Link>
             <button
                 className="muted-button"
                 style={{ marginRight: "10px" }}
                 onClick={handleDelete}
             >
                Delete
             </button>
          </article>
       </section>
   );
};

export default SingleBlogPage;