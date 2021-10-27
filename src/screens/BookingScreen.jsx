import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import DB from '../DB';
import formatCurrency from '../utils/currency';
import Error from '../components/Error';
import Loader from '../components/Loader';

const BookingScreen = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [hotel, setHotel] = useState();

  useEffect(() => {
    async function fetchData() {
      //   try {
      setLoading(true);
      window.setTimeout(() => {
        DB.map((hotel) =>
          hotel.id === match.params.hotelId ? setHotel(hotel) : '',
        );
        setLoading(false);
      }, 2000);

      // const URL = 'https://fake-hotel-api.herokuapp.com/api/hotels?count=100';
      //
      // const data = (await axios.get(URL)).data;
      // console.log(data);

      // setHotels(DB); // DB временно потом axios Запрос

      // } catch (error) {
      //   setError(error);
      //   console.log(error);
      //   setLoading(false);
      // }
    }
    fetchData();
  }, []);
  return (
    <div className="m-5">
      {loading ? (
        <Loader />
      ) : hotel ? (
        <div>
          <div className="row justify-content-center mt-5 bs">
            <div className="col-md-6">
              <h1>{hotel.name}</h1>
              <img src={hotel.img[0]} alt={''} className="bigimg"></img>
            </div>
            <div className="col-md-5">
              <div style={{ textAlign: 'right' }}>
                <h1>Booking Details</h1>
                <hr />
                <b>
                  <p>User:</p>
                  <p>From date:</p>
                  <p>To date:</p>
                </b>
              </div>
              <div style={{ textAlign: 'right' }}>
                <h1>Amount</h1>
                <hr />
                <b>
                  <p>Total days:</p>
                  <p>Rent per day: {formatCurrency(hotel.price)}</p>
                  <h1>Total amount:</h1>
                </b>
              </div>
              <div style={{ float: 'right' }}>
                <button className="show-more-btn btn btn-primary">
                  Pay now
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Error />
      )}
    </div>
  );
};
export default BookingScreen;
