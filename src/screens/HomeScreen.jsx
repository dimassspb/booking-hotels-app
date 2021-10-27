import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Hotel from '../components/Hotel';
import DB from '../DB';
import Pagination from '../components/Pagination';
import { paginate } from '../utils/paginate';
import Error from '../components/Error';

import Loader from '../components/Loader';

const HomeScreen = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

  useEffect(() => {
    // async function fetchData() {
    //   try {
    //     setLoading(true);
    //     const URL = 'http://fake-hotel-api.herokuapp.com/api/hotels?count=100';
    //     const data = (await axios.get(URL)).data;
    //     setHotels(data);
    //     setLoading(false);
    //   } catch (error) {
    //     setError(error);
    //     console.log(error);
    //     setLoading(false);
    //   }

    // }
    // fetchData();
    setLoading(true);
    window.setTimeout(() => {
      setHotels(DB);
      setLoading(false);
    }, 2000);
  }, []);
  console.log(DB);

  useEffect(() => {
    setCurrentPage(1);
  }, []);

  const count = hotels.length;
  console.log('Count:', count);

  const hotelsCrop = paginate(hotels, currentPage, pageSize);
  console.log('hotelsCrop', hotelsCrop);
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
    window.scrollTo(0, 0)
  };
  console.log('currentPage', currentPage);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        {loading ? (
          <Loader />
        ) : hotelsCrop.length >= 1 ? (
          hotelsCrop.map((hotel) => {
            return (
              <>
                <div key={hotel.id} className="col-md-9 mt-3">
                  <Hotel hotel={hotel} />
                </div>
              </>
            );
          })
        ) : (
          <Error />
        )}
      </div>
      <div className="d-flex justify-content-center">
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};
export default HomeScreen;
