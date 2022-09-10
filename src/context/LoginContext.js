import { createContext, useState } from 'react';

const LoginContext = createContext({
  user_id: 0,
  token: '',
  isLoggedIn: false,
  login: token => {},
  logout: () => {},
});

export const LoginProvider = ({ children }) => {
  const [userId, setUserId] = useState(0);
  const [token, setToken] = useState(null);
  const isLoggedIn = !!token;

  const loginHandler = (id, token) => {
    setUserId(id);
    setToken(token);
  };

  const logoutHandler = () => {
    setUserId(0);
    setToken(null);
  };

  const contextValue = {
    user_id: userId,
    token: token,
    isLoggedIn: isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
