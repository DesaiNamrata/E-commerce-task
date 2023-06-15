import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ViewProduct from "./viewProduct"
import { Link } from "react-router-dom";


function BasicExample() {

    const View=()=>{
        <ViewProduct/>

    }


    const [product, setProduct] = useState([]);

    useEffect(() => {
        loadProduct();
    }, [])

    const loadProduct = async () => {
        const result = await axios.get("http://localhost:8000/products");
        console.log(result, "result");
        setProduct(result.data);
    }
    return (
        <Container>
            <h2 className="text-center">Explore Exciting Products:</h2>
            <Row className="mt-3" >
                <Col xs={1} ></Col>
                <Col className="mt-3" style={{ display: "flex", flexDirection: "row" }}>
                    {product.map((product, index) => (
                        <Col xs={4} className="mt-5">
                            <Card style={{ width: '19rem' }}>
                                <Card.Img variant="top" src={product.icon} style={{ height: "14rem" }} />
                                <Card.Body>
                                    <Card.Title>{product.productTitle}</Card.Title>
                                    <Card.Text>
                                        {product.productCategory}
                                    </Card.Text>
                                    <Card.Text>
                                        $ {product.productPrice}
                                    </Card.Text>
                                    <Link exact to={`/products/${product.id}`} className="btn btn-primary mr-2">View</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}

                </Col>
            </Row>
        </Container>
    );
}

export default BasicExample;