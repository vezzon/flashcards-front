import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Flashcard() {
  const [flip, setFlip] = useState(false);
  const [index, change] = useState(1);
  const [card, setCard] = useState({ Eng: 'Start', Pl: 'Start' });

  useEffect(() => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6InVzZXJAaGVoZS54eXoiLCJQYXNzd29yZCI6IiQyYiQxMCRjaDVhYS5KMzVtc0M1UGJXTHA5V1cuT2kzc2hmMTJxSEVIM21TNGd4eW1LRUJNS29samhNeSIsImlhdCI6MTY2MjIwMjIzNiwiZXhwIjoxNjYyNDYxNDM2fQ.KJarhzH3L3y0wX6XZVeBbghivXoIhB1rdU8j4JngIME';
    axios
      .get(`http://127.0.0.1:4000/cards/${index}`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => setCard(res.data))
      .catch(err => console.log(err));
  }, [index]);

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
