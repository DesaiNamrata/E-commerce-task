import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
const ViewProducts = () => {

    const Navigate = useNavigate();

    const [products, setProducts] = useState({
        productTitle: "",
        productCategory: "",
        productPrice: ""
    });

    const { id } = useParams();

    const loadProducts = async () => {
        const result = await axios.get(`http://localhost:8000/products/${id}`);
        setProducts(result.data);
        console.log(result.data.icon);
    };


    const deleteProduct = async id => {
        await axios.delete(`http://localhost:8000/products/${id}`);
        loadProducts();
        Navigate("/");

    }

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <Container>
            <Row>
                <Col xs={1}></Col>
                <Col>
                    <Link className="btn btn-primary mt-5" exact to="/">Back to Home</Link>
                    <h1 className="display-4">Product Details</h1>
                    <hr />
                    <Card style={{ width: '50rem' }}>
                        <Card.Body>
                            <Card.Title>{products.productTitle}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"> {products.productCategory}</Card.Subtitle>
                            <Card.Text>
                                {products.productPrice}
                            </Card.Text>
                            <Card.Text>
                                {products.features}
                            </Card.Text>
                            <Card.Img variant="top" src={products.icon} style={{ height: "10rem", width: "10rem" }} />
                        </Card.Body>
                        <Link exact to={`/products/EditProduct/${products.id}`} className="btn btn-outline-primary mr-2 m-3"
                            style={{ width: "100px" }}
                        >Edit</Link>

                        <Link exact to="/" className="btn btn-danger m-3"
                            style={{ width: "100px" }}
                            onClick={() => deleteProduct(products.id)}>Delete</Link>

                    </Card>

                </Col>
            </Row>

        </Container>

    );
};

export default ViewProducts;