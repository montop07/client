import axios from 'axios';

export const addCustomer = (customerData) =>
    axios.post(`${process.env.REACT_APP_API_URL}/customers`, customerData);
