import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="Main_nav">
            <section className="container_nav">
                <h1 className="subject_nav">Small My Redux Web Blog</h1>

                <div className="navbar">
                    <div className="container_btn_nav">
                        <Link className="btn_nav btn_nav1" to={"/"}>Back</Link>
                        <Link className="btn_nav btn_nav2" to={"/users"}>writers</Link>
                    </div>
                </div>
            </section>
        </nav>
    );
};

export default Navbar;
