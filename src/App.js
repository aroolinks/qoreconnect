import Navbar from './components/navigation/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Map from './pages/Map';
import Gorila from './pages/Gorila';
function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/mapping' element={<Map />} />
          <Route path='/' exact element={<Home />} />
          <Route path='/gorila' element={<Gorila />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
