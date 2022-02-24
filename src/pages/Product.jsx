import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams()

  const products = useSelector((state) => state.allProducts.products);

  const product = products.find(item => item._id === id);

  const { title, description, price, category, in_stock, image, size } = product

  return (
    <div className="product_wrapper">
      <div className="product_image_container">
        <img
          src={image}
          alt="dummy"
          className="product_product_image"
        />
      </div>
      <div className="product_info_container">
        <h1 className="product_title">{title}</h1>
        <p className="product_description">
          {description}
        </p>

        <p className="product_price">$ {price.toFixed(2)}</p>

        <p className="product_description">
          Category: {category}
        </p>

        <p className="product_description">
         Size: {size}
        </p>

        <p className="product_description">
          Stock: {in_stock}
        </p>
      </div>
    </div>
  );
};

export default Product;
