import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllUsers } from "../reducers/userSlice";
import { nanoid } from "@reduxjs/toolkit";

const UsersList = () => {
    const [user, setUser] = useState("");

    const dispatch = useDispatch();

    const users = useSelector(selectAllUsers);

    const onUserChange = (e) => setUser(e.target.value);

    const canSave = Boolean(user);

    const handleSubmitForm = () => {
        if (canSave) {
            dispatch(addNewUser({ id: nanoid(), fullname: user }));
            setUser("");
        }
    };

    const handleDelete = (userId) => {
        dispatch(deleteApiUser(userId));
    };

    const renderedUsers = users.map((user) => (
        <li key={user.id}>
            <Link className="link-post badge text-black btn_nav bg_amber" to={`/users/${user.id}`}>{user.fullname}</Link>
            &nbsp;
            <Link
                style={{ marginRight: "10px", color: "tomato" }}
                onClick={() => handleDelete(user.id)}
            >
                &otimes;
            </Link>
        </li>
    ));

    return (
        <section className="container_card m-2 card_hover">
            <div>
                <form autoComplete="off">
                    <label className="subject_card" htmlFor="user">authors name :</label>
                    <input
                        className="form-control"
                        type="text"
                        id="user"
                        name="user"
                        value={user}
                        onChange={onUserChange}
                    />

                    <button
                        className="btn  btn_create btn_nav"
                        type="button"
                        onClick={handleSubmitForm}
                        disabled={!canSave}
                    >
                       Create a new author
                    </button>
                </form>
            </div>
            <h2>List of authors</h2>
            <ul>{renderedUsers}</ul>
        </section>
    );
};

export default UsersList;
