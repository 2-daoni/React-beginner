import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/info/:id" element={<Detail />}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
