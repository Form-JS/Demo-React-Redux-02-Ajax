import { useDispatch } from 'react-redux';
import './App.css';
import { fetchLiveboard } from './store/actions/irail-action';

function App() {
  const dispatch = useDispatch();

  const handleRequest = () => {
    dispatch(fetchLiveboard('bruxelles-central'));
  };

  return (
    <div className="App">
      <h1>Demo Redux 02 - Ajax</h1>

      <button onClick={handleRequest}>Call API Irail</button>
    </div>
  );
}

export default App;
