import React from 'react';
import './Purchases.css'; // Import the CSS file

const Item = ({ id, cover, name, price, status }) => (
  <div className="item" key={id}>
    <img src={cover} alt={name} />
    <h3>{name}</h3>
    <p>{price}</p>
    <p>Status: {status}</p> {/* Render status */}
  </div>
);

const Purchases = () => {
  const items = [
    {
      id: 1,
      cover: require("../shop/shops/women1.jpeg"),
      name: "white dress",
      price: "1800 $",
      status: "Processing", // Add status field
    },
    {
      id: 2,
      cover: require("../shop/shops/women2.jpeg"),
      name: "shirt",
      price: "200 $",
      status: "Shipped", // Add status field
    }
  ];

  return (
    <div>
      <h2>Your Purchases</h2>
      {items.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Purchases;
