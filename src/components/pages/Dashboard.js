import { useContext, useState } from 'react';
import CardsContext from '../../context/CardsContext';
import LoginContext from '../../context/LoginContext';
import axios from '../../api/Backend';

export default function Dashboard() {
  const { cards, refresh } = useContext(CardsContext);
  const { user_id, token } = useContext(LoginContext);
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');

  const addCardHandler = async event => {
    event.preventDefault();

    const card = { front, back, user_id };

    try {
      const res = await axios.post(`cards`, card, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      refresh(prev => !prev);
      setFront('');
      setBack('');
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const frontHandler = event => {
    setFront(event.target.value);
  };

  const backHandler = event => {
    setBack(event.target.value);
  };

  return (
    <>
      <h1>Dashboard</h1>
      <h2>Number of flashcards available {cards.length} </h2>
      {/* <h3>Pick number of cards you want to learn</h3>
      <input type="number" /> */}
      <h2>Add card</h2>
      <form onSubmit={addCardHandler}>
        <label htmlFor="front">Front</label>
        <input type="text" name="front" value={front} onChange={frontHandler} />
        <label htmlFor="back">Back</label>
        <input type="text" name="back" value={back} onChange={backHandler} />
        <button type="submit">Add card</button>
      </form>
      <h2>Add cards from CSV</h2>
      <p>Format is front,back</p>
    </>
  );
}
