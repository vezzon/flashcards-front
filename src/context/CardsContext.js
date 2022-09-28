import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { createContext, useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

const CardsContext = createContext({
  cards: [],
});

export const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const { user_id, token, isLoggedIn } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    if (!isLoggedIn) return;
    axiosPrivate
      .get(`/cards/users/${user_id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(res => setCards(res.data))
      .catch(err => {
        console.log('Cards context', err);
      });
  }, [token, isLoggedIn, user_id, refresh, axiosPrivate]);

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
