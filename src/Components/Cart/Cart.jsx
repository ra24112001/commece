import React, { useState, useEffect } from 'react';
import "./Cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const [paymentOption, setPaymentOption] = useState("");
  const [orderReference, setOrderReference] = useState("");

  const handlePrice = () => {
    let total = 0;
    cart.forEach((item) => {
      const itemPrice = parseFloat(item.price.replace('$', '').trim());
      total += item.amount * itemPrice;
    });
    setPrice(total);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  useEffect(() => {
    handlePrice();
  }, [cart]);

  const handlePaymentOptionChange = (option) => {
    setPaymentOption(option);
    if (option === "fawry") {
      setOrderReference(generateOrderReference());
    }
  };

  const generateOrderReference = () => {
    return "REF" + Math.floor(Math.random() * 90000) + 10000;
  };

  const handleCheckout = () => {
    // Process the checkout here
    console.log("Checkout button clicked!");
    console.log("Selected Payment Option:", paymentOption);
    console.log("Order Reference:", orderReference);
    // You can add further logic for processing the checkout
  };

  return (
    <article>
      {cart?.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.cover} alt={item.name} />
            <p>{item.name}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, +1)}> + </button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}> - </button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className='total'>
        <span>Total Price of your Cart</span>
        <span>total: {price}</span>
      </div>
      <div className="payment-options">
        <label>
          <input
            type="radio"
            name="payment"
            value="fawry"
            checked={paymentOption === "fawry"}
            onChange={() => handlePaymentOptionChange("fawry")}
          />
          Pay with Fawry
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="cash"
            checked={paymentOption === "cash"}
            onChange={() => handlePaymentOptionChange("cash")}
          />
          Payment Upon Receiving
        </label>
      </div>
      {paymentOption === "fawry" && (
        <div>
          <label>Order Reference Number:</label>
          <input
            type="text"
            value={orderReference}
            readOnly
          />
        </div>
      )}
     <button className="checkout-button" onClick={handleCheckout}>Submit Checkout</button>





    </article>
  );
}

export default Cart;
