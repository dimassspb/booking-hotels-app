import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import BookingScreen from './screens/BookingScreen';

function App() {
  return (
    <div className="App">
      <Router basename="/booking-hotels-app">
        <Navbar />
        <Route path="/" exact component={HomeScreen} />
        <Route path="/book/:hotelId" exact component={BookingScreen} />
      </Router>
    </div>
  );
}

export default App;
