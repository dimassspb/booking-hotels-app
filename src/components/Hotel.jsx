import React, { useState } from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import formatCurrency from '../utils/currency'
const Hotel = ({ hotel }) => {
  console.log('hotel', hotel.name);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="row bs">
        <div className="col-md-5">
          <img src={hotel.img} alt="" className="smallimg"></img>
        </div>
        <div className="col-md-7">
          <h1>
            {hotel.name} {hotel.stars}*
          </h1>
          <p>Location: {hotel.location}</p>
          <p>Services: {hotel.services.join(', ')}</p>
          <p>Rating: {hotel.rating.toFixed(1)}</p>
          <p>Price from: {formatCurrency(hotel.price)}</p>
          <div style={{ float: 'right' }}>
            <Link to={`/book/${hotel.id}`}>
              <button className="show-more-btn btn btn-primary m-2">
                Book now
              </button>
            </Link>
            <button
              className="show-more-btn btn btn-primary"
              onClick={handleShow}
            >
              View more ...
            </button>
          </div>
        </div>
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header>
            <Modal.Title>{hotel.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Carousel prevLabel="" nextLabel="">
              {hotel.img.map((url) => {
                return (
                  <Carousel.Item key={url}>
                    <img className="d-block w-100 bigimg" src={url} alt="" />
                  </Carousel.Item>
                );
              })}
            </Carousel>
            <p>{hotel.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="btn btn-danger"
              variant="secondary"
              onClick={handleClose}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Hotel;
