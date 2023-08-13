import {useNavigate, useParams} from "react-router-dom";
import { useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {blogUpdated, selectBlogsId} from "../reducers/blogSlice.js";

const EditBlogForm = () => {
   const {blogId} = useParams();

   const blog = useSelector(selectBlogsId(blogId));

   const [title, setTitle] = useState(blog.title);
   const [content, setContent] = useState();


   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleSubmitForm=()=>{
      if (title&&content){
         dispatch(blogUpdated({id:blogId,title,content}));
         navigate(`/blogs/${blogId}`);
      }
   }



   if (!blog) {
      return (
          <section className="text-center">
             <h2 className="" style={{color: "teal"}}>this is post not found🔎</h2>
          </section>
      )
   }

   const onTitleChange = (e) => setTitle(e.target.value);
   const onContentChange = (e) => setContent(e.target.value);


   return (
       <section style={{display: "flex", justifyContent: "center",}}>
          <h2 className="m">Edit Post</h2>
          <form autoComplete="off" className="form radius mt">
             <label className="label radius text_white bg_block" htmlFor="blogTitle">Subject:</label>
             <input
                 className="input radius font-md"
                 type="text"
                 id="blogTitle"
                 name="blogTitle"
                 value={title}
                 onChange={onTitleChange}
             />
             <label className="label radius text_white bg_block" htmlFor="blogContent">Body post :</label>
             <textarea
                 className="input radius font-sm"
                 id="blogContent"
                 name="blogContent"
                 value={content}
                 onChange={onContentChange}
             />
             <button className="btn radius m" type="button" onClick={handleSubmitForm}>
                Edit ⚡
             </button>
          </form>
       </section>
   )
}
export default EditBlogForm