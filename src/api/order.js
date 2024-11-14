import axios from 'axios';

export const addOrder = (orderData) =>
    axios.post(`${process.env.REACT_APP_API_URL}/orders`, orderData);
