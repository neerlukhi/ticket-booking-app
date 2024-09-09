import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Dashboard from './components/Dashboard';
import Moivedata from './components/Moivedata';
import Seatbook from './components/Seatbook';
import Ticketlist from './components/Ticketlist';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/ticket/:id" element={<Moivedata />} />
        <Route path="/book" element={<Seatbook />} />
        <Route path="/ticketlist" element={<Ticketlist/> } />
      </Routes>
    </>
  );
}

export default App;
