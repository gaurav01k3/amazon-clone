import React from "react";
import "./CSS/Product.css";
import StarTwoToneIcon from "@material-ui/icons/StarTwoTone";
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, image, price, rating }) => {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarTwoToneIcon />
              </p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
};

export default Product;
