import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const EditProduct = () => {
    const Navigate = useNavigate();
    const { id } = useParams();
    //alert(id);
    const [product, setProducts] = useState({
        productTitle: "",
        productCategory: "",
        productPrice: "",
        features : ""
    });
    
    const {productTitle, productCategory, productPrice, features}= product;

  

    useEffect(() => {
        loadProduct()
    },[])

    const onSubmit= async e =>{
        e.preventDefault();
        await axios.put(`http://localhost:8000/products/${id}`, product);
        Navigate("/");

    };
    
     const onInputChange = e =>{
         setProducts({...product, [e.target.productTitle]: e.target.value})
     };

    const loadProduct = async () =>{
        const result = await axios.get(`http://localhost:8000/products/${id}`);
        setProducts(result.data);
    }
    return (
        <>
        <Container>
  <Row>
    <Col xs={2}></Col>
    <Col>
        <div className="card mt-5" style={{width:"80%"}}>
            <div className="card-body">
                        <h1><center>Edit A Product</center></h1>
                        <form onSubmit={e => onSubmit(e)}>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Product Title" name="productTitle" value={productTitle} onChange={e => onInputChange(e)}/>
                            </div>
                             <div className="mb-3">
                                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Product Category" name="productCategory" value={productCategory} onChange={e => onInputChange(e)}/>
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Product Price" name="productPrice" value={productPrice} onChange={e => onInputChange(e)}/>
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Product Feature " name="features" value={features} onChange={e => onInputChange(e)}/>
                            </div>
                            <div className="mb-3">
                            </div> 
                            <button  className="btn btn-primary btn-lg btn-block mb-3" >Update Product</button>
                        </form>
                    </div>
                </div>
                </Col>
                </Row>
                </Container>
                </>
    )
}

export default EditProduct;