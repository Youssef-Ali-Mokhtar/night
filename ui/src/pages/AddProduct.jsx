import React, { useState } from 'react';
import AddProductClasses from './add-product.module.css'; // Assuming you have CSS modules for styling

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        price: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(product); // Replace with your submit logic (e.g., send data to backend)
        // Reset form or other actions after submission
        setProduct({
            name: '',
            price: ''
        });
    };

    return (
        <div className={AddProductClasses['add-product']}>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <div className={AddProductClasses['form-group']}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={AddProductClasses['form-group']}>
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
