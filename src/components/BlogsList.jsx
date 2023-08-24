import { useMemo } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useGetBlogsQuery } from "../api/apiSlice";
import ShowTime from "./ShowTime";
import ShowAuthor from "./ShowAuthor";
import ReactionButtons from "./ReactionButtons";
import Spinner from "./Spinner";

let Blog = ({ blog }) => {
    return (
        <>
            <article className="container_card ">
                <h3 className="subject_card">{blog.title}</h3>

                <div style={{ marginTop: "10px", marginRight: "20px" }}>
                    <ShowTime timestamp={blog.date} />
                    <ShowAuthor userId={blog.user} />
                </div>

                <p className="card_content">{blog.content.substring(0, 100)}.....</p>

                <ReactionButtons blog={blog} />

                <Link  to={`/blogs/${blog.id}`} className="btn btn_nav btn_nav1">
                    See More
                </Link>
            </article>
        </>
    );
};

const BlogsList = () => {
    const {
        data: blogs = [],
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetBlogsQuery();

    const navigate = useNavigate();

    const sortedBlogs = useMemo(() => {
        const sortedBlogs = blogs.slice();
        sortedBlogs.sort((a, b) => b.date.localeCompare(a.date));
        return sortedBlogs;
    }, [blogs]);

    let content;

    if (isLoading) {
        content = <Spinner text="Loading..." />;
    } else if (isSuccess) {
        content = sortedBlogs.map((blog) => <Blog key={blog.id} blog={blog} />);
    } else if (isError) {
        content = <div>{error}</div>;
    }

    return (
        <section className="blog-list">
            <button
                className="full-button accent-button"
                style={{
                    marginTop: "1em",
                }}
                onClick={() => navigate("/blogs/create-blog")}
            >
                Create New Post
            </button>
            <h2 className="alert alert-success" >All post</h2>
            {content}
        </section>
    );
};

export default BlogsList;
