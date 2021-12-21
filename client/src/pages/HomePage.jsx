import React, { useState, useEffect } from "react";
import axios from "axios";
import Hotel from "../components/Hotel";
// import DB from "../DB";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { paginate } from "../utils/paginate";
import moment from "moment";
import { DatePicker, Space } from "antd";
import "antd/dist/antd.css";

const { RangePicker } = DatePicker;

const HomePage = () => {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [fromDate, setFromDate] = useState();
    const [toDate, setToDate] = useState();

    const pageSize = 6;

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const data = (await axios.get("/api/hotels/getallhotels")).data;
                console.log("data:", data.hotels);
                setHotels(data.hotels);
                setLoading(false);
            } catch (error) {
                setError(error);
                console.log("Error:", error);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, []);

    const count = hotels.length;

    const hotelsCrop = paginate(hotels, currentPage, pageSize);
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
        window.scrollTo(0, 0);
    };

    const filterByDate = (dates) => {
        setFromDate(moment(dates[0]).format("DD-MM-YYYY"));
        setToDate(moment(dates[1]).format("DD-MM-YYYY"));
    };

    return (
        <div className='container'>
            <div className='date-sticky row mt-5'>
                <div className='col-md-3'>
                    <RangePicker format='DD-MM-YYYY' onChange={filterByDate} />
                </div>
            </div>
            <div className='row justify-content-center mt-5'>
                {loading ? (
                    <Loader />
                ) : hotelsCrop.length >= 1 ? (
                    hotelsCrop.map((hotel) => {
                        return (
                            <>
                                <div className='col-md-9 mt-3'>
                                    <Hotel
                                        key={hotel.id}
                                        hotel={hotel}
                                        fromDate={fromDate}
                                        toDate={toDate}
                                    />
                                </div>
                            </>
                        );
                    })
                ) : (
                    <Error />
                )}
            </div>
            <div className='d-flex justify-content-center'>
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
export default HomePage;
