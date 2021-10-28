import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import BookingScreen from './screens/BookingScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import LoginScreen from './screens/LoginScreen';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className='App'>
      <Router basename='/booking-hotels-app'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={HomeScreen} />
          <Route path='/book/:hotelId/:fromDate/:toDate' exact component={BookingScreen} />
          <Route path='/registration' exact component={RegistrationScreen} />
          <Route path='/login' exact component={LoginScreen} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
