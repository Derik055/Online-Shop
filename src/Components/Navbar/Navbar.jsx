import { Link } from "react-router-dom"
import CartIcon from "../../assets/icons/Icon_Cart.svg"
import ProfileIcon from "../../assets/icons/Icon_Profile.svg"

function Navbar() {
  return (
    <nav className="sticky z-50 top-0 flex items-center justify-between px-[100px] py-[16px] bg-[#0A1D37]">
      <Link to="/">
        <div className="navbar-logo font-['Montserrat'] text-3xl font-bold text-[#F8F9FB]">
          XCEL Sports
        </div>
      </Link>
      <div className="links flex items-center gap-16 font-['Montserrat'] text-xl font-medium text-[#F8F9FB]">
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/kids">Kids</Link>
      </div>
      <div className="icons flex items-center gap-8">

        <Link to="/cart">
         <img src={CartIcon} />
        </Link>
        <a href="#">
         <img src={ProfileIcon} />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
