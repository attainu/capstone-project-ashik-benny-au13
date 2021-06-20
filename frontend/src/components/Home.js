import React, { Fragment, useEffect } from "react";
import MetaData from "./layout/MetaData";

import { useDispatch, useSelector } from "react-redux";
import {useAlert} from 'react-alert';

import { getProducts } from "../actions/productActions";
import Product from "./products/Product";
import Loader from "../components/layout/Loader";

const Home = () => {

  const dispatch = useDispatch();
  const alert = useAlert();

  //loading from state
  const { loading, products, error, productsCount } = useSelector(
    (state) => state.product
  );

  useEffect(() => {

    if(error) {
      return alert.error(error);
    }

    dispatch(getProducts());


  }, [dispatch,alert,error]);


  return (
    <Fragment>
      {loading ? (
        <Loader/>
      ) : (
        <>
          <MetaData title={"Get the Best from"} />

          <h1 id="product_heading">Get the Best Offer !!</h1>
          <section id="products" className="container mt-5">
            <div className="row">
              {products &&
                products.map((product) => (
                  <Product key={product.id} product={product} />
                ))}
              ;
            </div>
          </section>
        </>
      )}
    </Fragment>
  );
};
export default Home;
