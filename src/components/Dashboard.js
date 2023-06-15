import React, {useState, useEffect} from "react"; 

import Carousel from 'react-bootstrap/Carousel';

import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';



import ProductList from './ProductList';

function Dashboard() {


  return (
    <>
    <Container>
        <Row>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= "images/pin_12.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= "images/banner2.jpg"
          alt="Second slide"
        />

      </Carousel.Item>
     
    </Carousel>
    </Row>
</Container>
<br/>
<Row>
<ProductList/>
</Row>

</>
  );
}

export default Dashboard;