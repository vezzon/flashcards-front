import { useState } from 'react';

export default function Flashcard() {
  const [flip, setFlip] = useState(false);
  let [index, change] = useState(0);

  const next = () => {
    if (index === SAMPLE_CARDS.length - 1) {
      console.log('You reached last card!');
    } else {
      change(index + 1);
    }
    console.log(index);
  };

  const prev = () => {
    if (index === 0) {
      console.log('You are on a first card already!');
    } else {
      change(index - 1);
    }
    console.log(index);
  };

  const SAMPLE_CARDS = [
    { Id: 1, Eng: 'Eng0', Pl: 'Pl0' },
    { Id: 2, Eng: 'Eng1', Pl: 'Pl1' },
    { Id: 3, Eng: 'Eng2', Pl: 'Pl2' },
  ];

  return (
    <div>
      <div className="flashcard" onClick={() => setFlip(!flip)}>
        <div className="flashcard-text">
          {!flip ? SAMPLE_CARDS[index].Eng : SAMPLE_CARDS[index].Pl}
        </div>
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
