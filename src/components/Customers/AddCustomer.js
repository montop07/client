import React, { useState } from 'react';
import { addCustomer } from '../../api/customer';

const AddCustomer = () => {
    const [customer, setCustomer] = useState({
        name: '', email: '', phone: '', total_spending: 0, visits: 0, last_visit: ''
    });

    const handleChange = (e) => setCustomer({ ...customer, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addCustomer(customer);
        alert('Customer added successfully');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={handleChange} placeholder="Name" />
            <input type="email" name="email" onChange={handleChange} placeholder="Email" />
            <input type="tel" name="phone" onChange={handleChange} placeholder="Phone" />
            <input type="number" name="total_spending" onChange={handleChange} placeholder="Total Spending" />
            <input type="number" name="visits" onChange={handleChange} placeholder="Visits" />
            <input type="date" name="last_visit" onChange={handleChange} placeholder="Last Visit" />
            <button type="submit">Add Customer</button>
        </form>
    );
};

export default AddCustomer;
