import { NavLink } from "react-router-dom";
const NavItem  = (props) =>{
    return(
                <NavLink to = {props.to}>
                    <li className="text-white hover:bg-sky-800 py-5 px-5 font-bold text-lg">
                        {props.children}
                    </li>
                </NavLink>
    );

};
export default NavItem;