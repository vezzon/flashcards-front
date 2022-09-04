import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import LoginContext from '../context/LoginContext';

export default function Flashcard() {
  const [flip, setFlip] = useState(false);
  const [index, change] = useState(1);
  const [card, setCard] = useState({ Eng: 'Front', Pl: 'Back' });
  const { token } = useContext(LoginContext);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:4000/cards/${index}`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => setCard(res.data))
      .catch(err => {
        console.log(err);
        console.log('token', token);
      });
  }, [index, token]);

  const next = () => {
    change(index => index + 1);
  };

  const prev = () => {
    change(index => index - 1);
  };

  return (
    <div>
      <div className="flashcard" onClick={() => setFlip(!flip)}>
        <div className="flashcard-text">{!flip ? card.Eng : card.Pl}</div>
      </div>
      <div className="buttons">
        <button className="btn" onClick={prev}>
          Prev
        </button>
        <button className="btn" onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
}
