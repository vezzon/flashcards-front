import { useState, useEffect, useContext } from 'react';
import CardsContext from '../../context/CardsContext';

export default function Flashcard() {
  const [flip, setFlip] = useState(false);
  const [index, change] = useState(0);
  const [card, setCard] = useState({ front: 'Front', back: 'Back' });
  const { cards } = useContext(CardsContext);

  useEffect(() => {
    if (cards.length === 0) return;

    setCard(cards[index]);
  }, [index, cards]);

  const next = () => {
    if (index + 1 === cards.length) return;
    change(index => index + 1);
  };

  const prev = () => {
    if (index === 0) return;
    change(index => index - 1);
  };

  return (
    <div>
      <div className="flashcard" onClick={() => setFlip(!flip)}>
        <div className="flashcard-text">{!flip ? card.front : card.back}</div>
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
