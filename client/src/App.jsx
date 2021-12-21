import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import NotFound from './components/NotFound';
import PayPage from './pages/PayPage';

function App() {
  return (
    <div className='App'>
      <Router basename='/booking-hotels-app'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/book/:hotelId/:fromDate/:toDate' exact component={BookingPage} />
          <Route path='/registration' exact component={RegistrationPage} />
          <Route path='/login' exact component={LoginPage} />
          <Route path='/pay' exact component={PayPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
