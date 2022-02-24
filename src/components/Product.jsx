import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, image } = product;

  const navigate = useNavigate();

  const viewProduct = () => {
    navigate(`/product/${_id}`, {
      state: {},
    });
  };

  return (
    <div className="product_container">
      <img
        src={image}
        alt="dummy"
        className="product_image"
        onClick={viewProduct}
      />

      <div className="product_icons">
        <div className="icon-item">
          <ShoppingCartCheckoutIcon />
        </div>

        <div className="icon-item">
          <FavoriteBorderIcon />
        </div>
      </div>
    </div>
  );
};

export default Product;
