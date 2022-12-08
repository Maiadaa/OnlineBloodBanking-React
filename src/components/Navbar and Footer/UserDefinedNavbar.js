import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";
const Navbar = () =>
{
    return(
        <nav>
            <ul className="flex bg-slate-500 justify-center">
            <NavItem to = "/"> Home </NavItem>
            <NavItem to = "/"> About Us </NavItem>
            <NavItem to = "/"> Log Out </NavItem>
            </ul>
        </nav>
    );
};
export default Navbar;