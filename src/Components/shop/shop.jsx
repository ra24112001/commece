import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import list from './Sdata';
import Cards from '../Cart/Cards';
import "./style.css";

const Shop = ({ handleClick }) => {
  return (
    <div className="con" style={{ width: '90%' }}>
      {list.map((item) => (
        <div className="item" key={item.id}>
          {/* Use Link to navigate to product details */}
          
            <Cards item={item} handleClick={handleClick} />
          
        </div>
      ))}
    </div>
  );
};

export default Shop;
