import {Link} from "react-router-dom";

const Navbar = () => {
   return(
       <nav>
          <section>
             <h3>a small blog by redux</h3>
             <div className="navContent">
                <div className="navLinks"></div>
                <Link to={"/"} className="btn radius mb">Back</Link>
             </div>

          </section>
       </nav>
   )
};
export default Navbar;