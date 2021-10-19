import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import BookingScreen from './screens/BookingScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <div className="App">
      <Router basename="/booking-hotels-app">
        <Navbar />
        <Route path="/" exact component={HomeScreen} />
        <Route path="/book/:hotelId" exact component={BookingScreen} />
        <Route path="/registration" exact component={RegistrationScreen} />
        <Route path="/login" exact component={LoginScreen} />
      </Router>
    </div>
  );
}

export default App;
