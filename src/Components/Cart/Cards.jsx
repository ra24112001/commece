  import React from 'react';
  import { Link } from 'react-router-dom';
import "../shop/style.css";


const Cards = ({ item, handleClick }) => {
  return (
    <div className="cards"> {/* Adjust column sizes */}
      <div className="image_box"> {/* Adjust height */}
        <img src={item.cover} className="card-img-top" alt={item.name} style={{ height: "200px", objectFit: "cover" }} />
        <div className="details">
          <Link to={`/product/${item.id}`} className="custom-link">
            <h2 className="card-title">{item.name}</h2>
          </Link>
          <p className="card-text">{item.price}</p>
          <button onClick={() => handleClick(item)} className="btn ">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
