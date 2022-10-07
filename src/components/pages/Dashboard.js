import { useState, useRef, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import useCards from '../../hooks/useCards';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useCSVReader } from 'react-papaparse';
import './Dashboard.css';

const Dashboard = () => {
  const { cards, refresh } = useCards();
  const { userId } = useAuth();
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');
  const [newCards, setNewCards] = useState([]);
  const { CSVReader } = useCSVReader();
  const addFrontRef = useRef();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    addFrontRef.current.focus();
  }, []);

  const createCardReq = async card => {
    try {
      await axiosPrivate.post(`cards`, card);
    } catch (error) {
      console.log('create card req', error);
    }
  };

  const addCardHandler = async event => {
    event.preventDefault();

    const card = { front, back, userId };

    try {
      createCardReq(card);
      refresh(prev => !prev);
      setFront('');
      setBack('');
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

  const exstractCSV = file => {
    const { data } = file;
    let cardsArr = [];
    data.forEach(ele => {
      if (ele.length > 2) {
        const card = { front: ele[2], back: ele[3], userId };
        cardsArr.push(card);
      }
    });
    setNewCards(cardsArr);
  };

  const addNewCardsHandler = () => {
    newCards.forEach(card => {
      createCardReq(card);
    });
    refresh(prev => !prev);
  };

  const listNewCards = () => {
    return (
      <ol>
        {newCards.map(card => (
          <li key={card.front}>
            <strong>{card.front}</strong>: {card.back}
          </li>
        ))}
      </ol>
    );
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <h2>Number of flashcards available {cards.length} </h2>
      {/* <h3>Pick number of cards you want to learn</h3>
      <input type="number" /> */}
      <div className="dashboard-add-card">
        <h2>Add card</h2>
        <form onSubmit={addCardHandler}>
          <div>
            <label htmlFor="front">Front</label>
            <input
              ref={addFrontRef}
              type="text"
              name="front"
              value={front}
              onChange={frontHandler}
              required
            />
          </div>
          <div>
            <label htmlFor="back">Back</label>
            <input
              type="text"
              name="back"
              value={back}
              onChange={backHandler}
              required
            />
          </div>
          <button type="submit">Add card</button>
        </form>
      </div>
      <div className="dashboard-csv">
        <h2>Add cards from CSV</h2>
        <p>Format is lang1,lang2,front,back</p>
        <p>This is default CSV file from google translate</p>
        <CSVReader
          onUploadAccepted={results => {
            // console.log(results);
            exstractCSV(results);
          }}
        >
          {({
            getRootProps,
            acceptedFile,
            ProgressBar,
            getRemoveFileProps,
          }) => (
            <>
              <div>
                <button type="button" {...getRootProps()}>
                  Browse file
                </button>
                <div>{acceptedFile && acceptedFile.name}</div>
                <button {...getRemoveFileProps()}>Remove</button>
              </div>
              <ProgressBar />
            </>
          )}
        </CSVReader>

        <button onClick={addNewCardsHandler}>Add cards</button>
        {listNewCards()}
      </div>
    </div>
  );
};

export default Dashboard;
