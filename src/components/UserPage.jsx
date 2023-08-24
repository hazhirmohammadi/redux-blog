import { Link, createSearchParams, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserById } from "../reducers/userSlice";
import { selectUserBlogs } from "../reducers/blogSlice";
import { useMemo } from "react";
import { createSelector } from "@reduxjs/toolkit";
import { useGetBlogsQuery } from "../api/apiSlice";

const UserPage = () => {
    const { userId } = useParams();

    const user = useSelector((state) => selectUserById(state, userId));

    const selectUserBlogs = useMemo(() => {
        const emptyArray = [];

        return createSelector(
            (res) => res.data,
            (res, userId) => userId,
            (data, userId) =>
                data?.filter((blog) => blog.user === userId) ?? emptyArray
        );
    }, []);

    const { userBlogs } = useGetBlogsQuery(undefined, {
        selectFromResult: (result) => ({
            ...result,
            userBlogs: selectUserBlogs(result, userId),
        }),
    });

    const blogTitles = userBlogs.map((blog) => (
        <li className="list_post" key={blog.id}>
            <Link className="link-post badge text-black btn_nav" to={`/blogs/${blog.id}`}>{blog.title} 👁</Link>
        </li>
    ));

    return (
        <section className="container_card m-1 ">
            <h2 className="alert alert-danger">{user.fullname}</h2>

            <ul>
                {userBlogs.length > 0 ? (
                    blogTitles
                ) : (
                    <li style={{ listStyleType: "none" }}>
                        Our author has not published any posts yet🤗
                    </li>
                )}
            </ul>
        </section>
    );
};

export default UserPage;
