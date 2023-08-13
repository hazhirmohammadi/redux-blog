import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

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
         dispatch(blogAdded({ id: nanoid(), title, content }));
         setTitle("");
         setContent("");
         navigate("/");
      }
   };

   return (
       <section style={{display:"flex",justifyContent:"center",}}>
          <h2 className="m">create Post</h2>
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
                Create ⚡
             </button>
          </form>
       </section>
   );
};

export default CreateBlogForm;
