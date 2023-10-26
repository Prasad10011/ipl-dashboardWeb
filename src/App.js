import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './Pages/HomePage';
import MatchPage from './Pages/MatchPage';
import TeamPage from './Pages/TeamPage';


function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/teams/:teamName/matches/:year" element={< MatchPage/>} />
              <Route  path="/teams/:teamName" element={< TeamPage/>} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;
