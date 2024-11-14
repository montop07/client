import axios from 'axios';

// Register user function
export const registerUser = async (username, password) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, {
            username,
            password,
        });
        return response.data; // Return success data
    } catch (error) {
        throw new Error(error.response?.data?.msg || 'Registration failed');
    }
};

// Login user function (already defined)
export const loginUser = async (username, password) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, {
            username,
            password,
        });
        return response.data; // Return token data on success
    } catch (error) {
        throw new Error(error.response?.data?.msg || 'Login failed');
    }
};
