import axios from '../api/Backend';
import { createContext, useEffect, useState, useContext } from 'react';
import LoginContext from '../context/LoginContext';

const CardsContext = createContext({
  cards: [],
});

export const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const { user_id, token, isLoggedIn } = useContext(LoginContext);

  useEffect(() => {
    if (!isLoggedIn) return;
    axios
      .get(`/cards/users/${user_id}`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => setCards(res.data))
      .catch(err => {
        console.log(err);
      });
  }, [token, isLoggedIn, user_id, refresh]);

  const contextValue = {
    cards: cards,
    refresh: setRefresh,
  };

  return (
    <CardsContext.Provider value={contextValue}>
      {children}
    </CardsContext.Provider>
  );
};

export default CardsContext;
