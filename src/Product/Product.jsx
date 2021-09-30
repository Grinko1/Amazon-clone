import { StarBorderOutlined } from '@material-ui/icons';
import React from 'react';
import { useStateValue } from '../StateProviser';
import './Product.css';

export default function Product({ id, title, image, price, rating }) {
  const [{basket}, dispatch] = useStateValue();


  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
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
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarBorderOutlined />
            ))}
        </div>
      </div>
      <img src={image} alt="product" />
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}
