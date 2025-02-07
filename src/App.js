import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Join from './component/Join/Join'; // Make sure to import your components
import Chat from './component/Chat/Chat'; // Make sure to import your components
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Join />} />
          <Route exact path="/chat"  element={<Chat />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;