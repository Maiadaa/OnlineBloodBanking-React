import AuthContext from './authContext';

import { useState } from 'react';

const AuthProvider = (props) => {
  const [username, setUsername] = useState('');
  const [id, setID] = useState('');
  const [token, setToken] = useState('');
  const [role, setRole] = useState('');
  const [hospitalId, setHospitalId] = useState('');

  

  const authContext = {
    username: username,
    id: id,
    token: token,
    role: role,
    hospitalId: hospitalId,
    login: (id, username, token, role, hospitalId) => {
      setID(id);
      setUsername(username);
      setToken(token);
      setRole(role);
      setHospitalId(hospitalId);
    },
    logout: () => {
      setUsername('');
      setID('');
      setToken('');
      setRole('');
      setHospitalId('');
    }
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
