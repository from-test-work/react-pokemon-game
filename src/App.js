import {useState} from 'react';
import HomePage from "./routes/Home";
import GamePage from "./routes/Game";

const App = () => {
  const [page, setPage] = useState('app');

  const handleChangePage = (pageName) => {
    console.log('####: <App />');
    setPage(pageName);
  }

  switch (page) {
    case "app":
    default:
      return <HomePage onChangePage={handleChangePage} />
    case "game":
      return <GamePage onChangePage={handleChangePage} />
  }
}

export default App;