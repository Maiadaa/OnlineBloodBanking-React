import { useContext } from 'react';
import AuthContext from '../../components/store/authContext';
import NavItem from './NavItem';

const Navbar = () => {
  var homeURL;
  var accountURL;
  const authContext = useContext(AuthContext);
  if(authContext.role == "Lab Manager"){
    homeURL = "/LabManagerMenu";
    accountURL = "/LabManager/Update";
  }else if(authContext.role == "Lab Admin"){
    homeURL = "/LabAdminMenu";
    accountURL = "/LabAdmin/Update";
  }else if(authContext.role == "Super Admin"){
    homeURL = "/SuperAdminHomePage";
    accountURL = "/superAdmin/Update";
  }else if (authContext.role == "Doctor"){
    //homeURL = "/DoctorHomePage";
    //accountURL = "/";
  }else if (authContext.role == "Donor"){
    homeURL = "/DonorHomePage";
    //accountURL = "";
  }

  return (
    <nav>
      <ul className="flex bg-sky-900 justify-center items-center">
        {authContext.token && <NavItem to={homeURL}>Home</NavItem>}
        <NavItem to="/">About</NavItem>
        {!authContext.token && <NavItem to="/signin">Sign In</NavItem>}
        {!authContext.token && <NavItem to="/signup">Sign Up</NavItem>}
        {authContext.token && <NavItem to={accountURL}>Account</NavItem>}
        {authContext.token && <NavItem to="/logout">Log out</NavItem>}
      </ul>
    </nav>
  );
};

export default Navbar;
