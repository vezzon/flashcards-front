import useRefreshToken from '../../hooks/useRefreshToken';

const Home = () => {
  const refresh = useRefreshToken();

  return (
    <>
      <h1>Home</h1>
      <button onClick={() => refresh()}>Refresh</button>
    </>
  );
};

export default Home;
