import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { blogDeleted, selectBlogById } from "../reducers/blogSlice";
import ShowTime from "./ShowTime.jsx";
import ShowAuthor from "./ShowAuthor.jsx";

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
          <article className="blog bg_block p1 mt">
             <h2 className="text_white ml">{blog.title}</h2>
             <div >
                <a className="text_white"><ShowTime timestamp={blog.date}/></a>
                <a className="m bg_amber p1 radius"><ShowAuthor userId={blog.user}/></a>
             </div>
             <p className="blog-content text_white">{blog.content}</p>

             <Link to={`/editBlog/${blog.id}`} className="button ">
                Edit
             </Link>
             <button
                 className="muted-button ml red"
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