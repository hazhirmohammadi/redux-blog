import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEditBlogMutation, useGetBlogQuery } from "../api/apiSlice";

const EditBlogForm = () => {
    const { blogId } = useParams();

    const { data: blog } = useGetBlogQuery(blogId);
    const [updateBlog, { isLoading }] = useEditBlogMutation();

    const [title, setTitle] = useState(blog.title);
    const [content, setContent] = useState(blog.content);

    const navigate = useNavigate();

    const onTitleChange = (e) => setTitle(e.target.value);
    const onContentChange = (e) => setContent(e.target.value);

    const handleSubmitForm = async () => {
        const editedBlog = {
            id: blogId,
            date: blog.date,
            title,
            content,
            user: blog.user,
            reactions: {
                thumbsUp: 0,
                hooray: 0,
                heart: 0,
                rocket: 0,
                eyes: 0,
            },
        };
        if (title && content) {
            await updateBlog({ ...editedBlog });
            navigate(`/blogs/${blogId}`);
        }
    };

    if (!blog) {
        return (
            <section>
                <h2>The post you are looking for does not exist, my friend</h2>
            </section>
        );
    }

    return (
        <section className="container_card m-2 ">
            <h2 className="subject_Create_Post">Edit post 📝</h2>
            <form autoComplete="off">
                <label className="badge Post_title" htmlFor="blogTitle">Subject Post:</label>
                <input
                    className="form-control"
                    type="text"
                    id="blogTitle"
                    name="blogTitle"
                    value={title}
                    onChange={onTitleChange}
                />
                <label className="badge Post_title" htmlFor="blogContent"> Main content :</label>
                <textarea
                    className="form-control"
                    id="blogContent"
                    name="blogContent"
                    value={content}
                    onChange={onContentChange}
                />
                <button
                    type="button"
                    onClick={handleSubmitForm}
                    className="btn  btn_create btn_nav"
                >
                   Save Edit
                </button>
            </form>
        </section>
    );
};

export default EditBlogForm;
