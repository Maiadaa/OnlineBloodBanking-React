import { createContext } from 'react';

const AuthContext = createContext({
  username: '',
  id: '',
  token: '',
  role: '',
  hospitalId: '',
  login: (id, username, token, role, hospitalId) => {},
  logout: () => {}
});

export default AuthContext;
