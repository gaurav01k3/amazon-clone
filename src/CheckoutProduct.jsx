import React from "react";
import "./CSS/CheckoutProduct.css";
import StarTwoToneIcon from "@material-ui/icons/StarTwoTone";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove the irtem from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarTwoToneIcon />
              </p>
            ))}
        </div>
        <button onClick={() => removeFromBasket()}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
