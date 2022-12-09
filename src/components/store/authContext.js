import { createContext } from 'react';

const AuthContext = createContext({
  username: '',
  id: '',
  token: '',
  role: '',
  login: (id, username, token, role) => {},
  logout: () => {}
});

export default AuthContext;
