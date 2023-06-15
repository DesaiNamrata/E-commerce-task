import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const AddProduct = () => {
    const Navigate = useNavigate();
    // const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const { register, trigger, handleSubmit, formState: { errors },reset } = useForm();

    const [product, setProducts] = useState({
        productTitle: "",
        productCategory: "",
        productPrice: "",
        features : ""
    });

    console.log('name',product);

    const {productTitle, productCategory, productPrice, features}= product;

   
    const onSubmit = async (data,e) => {
        console.log('data',data);
        //  const onSubmit = async e => {
                e.preventDefault();
                await axios.post("http://localhost:8000/products", data);
                Navigate("/");
            // }
        
    };
   // console.log(errors);

    const onError = (errors) =>{
        console.log(errors);
    };

    useEffect(() => {
       
          console.log('user',product); 
        
    }, [])


    const onInputChange = e => {
        console.log(e,"e");
        setProducts({ ...product, [e.target.productTitle]: e.target.value })
    };



    return (
      <>
   
<Container>
  <Row>
    <Col xs={2}></Col>
    <Col>
    <div className="card mt-5" style={{ width: "80%" }}>
            <div className="card-body">
                <h1><center>Add A Product</center></h1>
                <form onSubmit={handleSubmit(onSubmit)}>

                <div className="mb-3">
                        <input type="text" 
                        className="form-control" 
                         placeholder="Enter Product Title" 
                         name="productTitle" 
                          onChange={e => onInputChange(e)} 
                          {...register("productTitle", { required: "Title is required",
                        })} 
                          onKeyUp={() => {
                            trigger("productTitle");
                        }}
                          />
                        {errors.productTitle && (<small className="text-danger">{errors.productTitle.message}</small>)}
                    </div>


                    {/* <p style={{color:"red"}}>{formErrors.name}</p> */}
                    <div className="mb-3">
                        <input type="text" 
                        className="form-control" 
                         placeholder="Enter Product Category" 
                         name="productCategory" 
                          onChange={e => onInputChange(e)} 
                          {...register("productCategory", { required: "Category is required",
                        })} 
                          onKeyUp={() => {
                            trigger("productCategory");
                        }}
                          />
                        {errors.productCategory && (<small className="text-danger">{errors.productCategory.message}</small>)}
                    </div>

                    <div className="mb-3">
                        <input type="text" 
                        className="form-control" 
                         placeholder="Enter Product Price" 
                         name="productPrice" 
                          onChange={e => onInputChange(e)} 
                          {...register("productPrice", { required: "Price is required",
                        })} 
                          onKeyUp={() => {
                            trigger("productPrice");
                        }}
                          />
                        {errors.productPrice && (<small className="text-danger">{errors.productPrice.message}</small>)}
                    </div>

                    <div className="mb-3">
                        <input type="text" 
                        className="form-control" 
                         placeholder="Enter Product features" 
                         name="features" 
                          onChange={e => onInputChange(e)} 
                          {...register("features", { required: "Features is required",
                        })} 
                          onKeyUp={() => {
                            trigger("features");
                        }}
                          />
                        {errors.features && (<small className="text-danger">{errors.features.message}</small>)}
                    </div>

                    <button className="btn btn-primary btn-lg btn-block mb-3" >Add User</button>
                
                </form>
            </div>
        </div>
    </Col>
  </Row>
     
</Container>
        
        </>

    )
}


export default AddProduct;