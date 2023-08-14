import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";


import {blogAdded} from "../reducers/blogSlice";

const CreateBlogForm = () => {
   const [title, setTitle] = useState("");
   const [content, setContent] = useState("");
   const [userId, setUserId] = useState("");

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const users=useSelector(state => state.users)

   const onTitleChange = (e) => setTitle(e.target.value);
   const onContentChange = (e) => setContent(e.target.value);
   const onAuthorChanged = (e) => setUserId(e.target.value);

   const canSave=[title,content,userId].every(Boolean);
   const handleSubmitForm = () => {
      if (canSave) {
         dispatch(blogAdded(title, content,userId));
         setTitle("");
         setContent("");
         setUserId("");
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
             <label htmlFor="blogAuthor">Author:</label>
             <select
                 id="blogAuthor"
                 value={userId}
                 onChange={onAuthorChanged}
             >
                <option value="">Select Author</option>
                {users.map((user) => (
                    <option key={user.id} value={user.id}>
                       {user.fullname}
                    </option>
                ))}
             </select>
             <label htmlFor="blogContent">Main content:</label>
             <textarea
                 id="blogContent"
                 name="blogContent"
                 value={content}
                 onChange={onContentChange}
             />
             <button
                 disabled={!canSave}
                 type="button"
                 onClick={handleSubmitForm}
             >
                Save POST
             </button>
          </form>
       </section>
   );
};

export default CreateBlogForm;