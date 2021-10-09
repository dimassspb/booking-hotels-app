import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import BookingScreen from './screens/BookingScreen';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/home" exact component={HomeScreen} />
        <Route path="/book/:hotelId" exact component={BookingScreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
