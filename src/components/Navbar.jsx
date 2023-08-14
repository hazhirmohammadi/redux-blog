import { Link } from "react-router-dom";

const Navbar = () => {
   return (
       <nav>
          <section>
             <h4>Redux Blog</h4>

             <div className="navContent">
                <div className="navLinks mb">
                   <Link to={"/"}>Back</Link>
                </div>
             </div>
          </section>
       </nav>
   );
};

export default Navbar;
