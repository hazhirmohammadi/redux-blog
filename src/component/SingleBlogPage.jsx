import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {blogDeleted, selectBlogsId} from "../reducers/blogSlice.js";


const SingleBlogPage = () => {
   const {blogId} = useParams();

   const navigate = useNavigate();
   const dispatch = useDispatch();

   const blog = useSelector(state => selectBlogsId(state, blogId));
   if (!blog) {
      return (
          <section className="text-center">
             <h2 className="" style={{color: "teal"}}>this is post not found🔎</h2>
          </section>
      )
   }

   const handleDelete=()=>{
      if (blog){
         dispatch(blogDeleted({id: blog.id}))
         navigate("/");
      }
   }
   return (
       <section>
          <article className="blog">
             <h2>{blog.title}</h2>

             <p className="blog-content">{blog.content}</p>
             <Link to={`/editBlog/${blog.id}`} className="btn radius">
                Edit Post
             </Link>
             <button
                 className="muted-button radius red ml"
                 onClick={handleDelete}
             >
                Delete
             </button>
          </article>
       </section>
   )
};
export default SingleBlogPage;