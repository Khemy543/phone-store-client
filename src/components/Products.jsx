import React, { useEffect } from "react";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setProducts } from "../store/actions/productActions";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const Products = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.allProducts.products);
  const fetchProducts = async () => {
    try {
      const repsonse = await axios.get("http://localhost:5500/api/phone");

      if (repsonse) {
        dispatch(setProducts(repsonse.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  });

  return (
    <div className="products_container">
      {products.length > 0 &&
        products.map((item) => <Product key={item._id} product={item} />)}

      {products.length <= 0 &&
        [1, 2, 3, 4].map((item) => (
          <div>
            <Stack spacing={1}>
              <Skeleton variant="rectangular" width={280} height={310} />
            </Stack>
          </div>
        ))}
    </div>
  );
};

export default Products;
