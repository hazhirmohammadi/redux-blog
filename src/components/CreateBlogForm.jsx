import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


import { blogAdded } from "../reducers/blogSlice";

const CreateBlogForm = () => {
   const [title, setTitle] = useState("");
   const [content, setContent] = useState("");

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const onTitleChange = (e) => setTitle(e.target.value);
   const onContentChange = (e) => setContent(e.target.value);

   const handleSubmitForm = () => {
      if (title && content) {
         dispatch(blogAdded(title, content));
         setTitle("");
         setContent("");
         navigate("/");
      }
   };

   return (
       <section>
          <h2>Create a new Post</h2>
          <form autoComplete="off">
             <label htmlFor="blogTitle">Subject Post: </label>
             <input
                 type="text"
                 id="blogTitle"
                 name="blogTitle"
                 value={title}
                 onChange={onTitleChange}
             />
             <label htmlFor="blogContent">Main content:</label>
             <textarea
                 id="blogContent"
                 name="blogContent"
                 value={content}
                 onChange={onContentChange}
             />
             <button type="button" onClick={handleSubmitForm}>
                Save POST
             </button>
          </form>
       </section>
   );
};

export default CreateBlogForm;