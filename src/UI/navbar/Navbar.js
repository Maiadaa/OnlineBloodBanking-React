import { useContext } from 'react';
import AuthContext from '../../components/store/authContext';
import NavItem from './NavItem';

const Navbar = () => {
  var homeURL;
  const authContext = useContext(AuthContext);
  if(authContext.role == "Lab Manager"){
    homeURL = "LabManagerHomePage";
  }

  return (
    <nav>
      <ul className="flex bg-sky-900 justify-center items-center">
      {authContext.token && <NavItem to="/modifyAccount">Home</NavItem>}
        <NavItem to="/">About</NavItem>
        {!authContext.token && <NavItem to="/signin">Sign In</NavItem>}
        {!authContext.token && <NavItem to="/signup">Sign Up</NavItem>}
        {authContext.token && <NavItem to="/modifyAccount">Account</NavItem>}
        {authContext.token && <NavItem to="/logout">Log out</NavItem>}

      </ul>
    </nav>
  );
};

export default Navbar;