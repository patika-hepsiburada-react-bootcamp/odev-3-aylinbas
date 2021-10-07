import './App.css';
import { connectSocket } from './socketApi';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    connectSocket();
  }, []);


  return (
    <div className="App">
      app
    </div>
  );
}

export default App;
