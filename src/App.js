import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GoalsList from './GoalsList.js';
import Tracker from './Tracker.js';
import Cagnotte from './Cagnotte.js';

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<GoalsList />} />
            <Route path="tracker/:pseudo" element={<Tracker background={true} />} />
            <Route path="trackernobg/:pseudo" element={<Tracker background={false} />} />
            <Route path="global" element={<Cagnotte background={true} />} />
            <Route path="globalnobg" element={<Cagnotte background={false} />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
