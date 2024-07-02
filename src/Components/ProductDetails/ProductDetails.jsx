import React, { useState } from 'react';
import list from '../shop/Sdata'; // Import your list of products here
import './ProductDetails.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = ({ match }) => {
  const { id } = match.params;
  const product = list.find(item => item.id === parseInt(id)); // Find the product with the matching ID

  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0); // Initialize rating state
  const [feedbackList, setFeedbackList] = useState([]);

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const submitFeedback = () => {
    // Here you can handle what to do with the feedback and rating, e.g., send them to a server
    console.log("Feedback submitted:", feedback);
    console.log("Rating submitted:", rating);
    // Add the feedback and rating to the feedbackList
    setFeedbackList([...feedbackList, { feedback, rating }]);
    // Clear the feedback and rating inputs
    setFeedback('');
    setRating(0);
  };

  const updateRating = (index) => {
    setRating(index + 1);
  };

  const updateFeedback = (index) => {
    const updatedFeedback = prompt("Enter updated feedback:");
    if (updatedFeedback !== null) {
      const updatedRating = parseInt(prompt("Enter updated rating:"));
      if (!isNaN(updatedRating) && updatedRating >= 0 && updatedRating <= 5) {
        const updatedList = [...feedbackList];
        updatedList[index].feedback = updatedFeedback;
        updatedList[index].rating = updatedRating;
        setFeedbackList(updatedList);
      } else {
        alert("Please enter a valid rating between 0 and 5.");
      }
    }
  };

  const deleteFeedback = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this feedback?");
    if (confirmDelete) {
      const updatedList = [...feedbackList];
      updatedList.splice(index, 1);
      setFeedbackList(updatedList);
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details-container">
      <img className="product-image" src={product.cover} alt={product.name} />
      <h2>{product.name}</h2>
      <h2>Price: {product.price}</h2>
      {/* Add other details here */}
      <textarea
        className="feedback-input"
        placeholder="Add your feedback here..."
        value={feedback}
        onChange={handleFeedbackChange}
      />
      <div className="rating-input">
        {[...Array(5)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className={index < rating ? "star-filled" : "star-empty"}
            onClick={() => updateRating(index)}
          />
        ))}
      </div>
      <button className="feedback-button" onClick={submitFeedback}>Submit Feedback</button>
      {/* Display feedback */}
      <div className="feedback-container">
        <h3>Feedback:</h3>
        <div className="feedback-list">
          {feedbackList.map((item, index) => (
            <div key={index} className="feedback-item">
              <p>{item.feedback}</p>
              <p>Rating: {item.rating}</p>
              <button  className="update_feedback"    onClick={() => updateFeedback(index)}>Update</button>
              <button className="delete_feedback"   onClick={() => deleteFeedback(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
