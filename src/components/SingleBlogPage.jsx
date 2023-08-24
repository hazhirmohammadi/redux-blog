import { useParams, Link, useNavigate } from "react-router-dom";
import { useGetBlogQuery } from "../api/apiSlice";
import ShowTime from "./ShowTime";
import ShowAuthor from "./ShowAuthor";
import ReactionButtons from "./ReactionButtons";
import Spinner from "./Spinner";

const SingleBlogPage = () => {
    const { blogId } = useParams();

    const { data: blog, isFetching, isSuccess } = useGetBlogQuery(blogId);

    const navigate = useNavigate();

    if (!blog) {
        return (
            <section>
                <h2>🤗The post you are looking for does not exist, my friend</h2>
            </section>
        );
    }

    let content;
    if (isFetching) {
        content = <Spinner text=" Loading..." />;
    } else if (isSuccess) {
        content = (
            <article className="container_card m-2">
                <h2 className="subject_card">{blog.title}</h2>

                <div style={{ marginTop: "10px", marginRight: "20px" }}>
                    <ShowTime timestamp={blog.date} />
                    <ShowAuthor userId={blog.user} />
                </div>

                <p className="card_content">{blog.content}</p>

                <ReactionButtons blog={blog} />

                <Link to={`/editBlog/${blog.id}`}className="btn btn_nav btn_nav1">
                    Edit Post
                </Link>
                <button
                    className="btn btn_nav bg-danger"
                    style={{ marginRight: "10px" }}
                >
                   Delete Post
                </button>
            </article>
        );
    }

    const handleDelete = () => {
        if (blog) {
            // dispatch(deleteApiBlog(blog.id));
            // dispatch(blogDeleted({ id: blog.id }));
            navigate("/");
        }
    };

    return <section> {content} </section>;
};

export default SingleBlogPage;
