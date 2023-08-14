import { Link } from "react-router-dom";

const Navbar = () => {
   return (
       <nav>
          <section>
             <h4>وبلاگ کوچک ریداکسی من</h4>

             <div className="navContent">
                <div className="navLinks">
                   <Link to={"/"}>وبلاگ</Link>
                </div>
             </div>
          </section>
       </nav>
   );
};

export default Navbar;
