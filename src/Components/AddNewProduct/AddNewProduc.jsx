import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AddNewProduct.css'; // Import the CSS file

const AddNewProduct = ({ onAddProduct }) => {
    const [product, setProduct] = useState({
        id: '',
        cover: '',
        name: '',
        price: ''
    });
    const [productsList, setProductsList] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setProduct({ ...product, cover: reader.result });
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddProduct(product);
        setProductsList([...productsList, product]);
        setProduct({
            id: '',
            cover: '',
            name: '',
            price: ''
        });
    };

    const handleDeleteProduct = (index) => {
        const updatedProducts = [...productsList];
        updatedProducts.splice(index, 1);
        setProductsList(updatedProducts);
    };

    return (
        <div className="add-new-product-container">
            <h2>Add New Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>ID:</label>
                    <input type="text" name="id" value={product.id} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Cover Image:</label>
                    <input type="file" accept="image/*" onChange={handleFileChange} />
                    {product.cover && <img src={product.cover} alt="Product" className="product-image" />}
                </div>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={product.name} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="text" name="price" value={product.price} onChange={handleInputChange} />
                </div>
                <button type="submit">Add Product</button>
            </form>
            <div>
                <h3>Added Products:</h3>
                <ul>
                    {productsList.map((prod, index) => (
                        <li key={index}>
                            <img src={prod.cover} alt="Product" className="product-image" />
                            <span>{prod.name} - {prod.price}</span>
                            <button  className ="deletenewproduct " onClick={() => handleDeleteProduct(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
           
        </div>
    );
}

export default AddNewProduct;
