import { useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import AuthContext from '../components/store/authContext';

const LogoutPage = () => {
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    authContext.logout();
    navigate(`/signin`);
};

export default LogoutPage;
