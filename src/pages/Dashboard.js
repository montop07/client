import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import AddCustomer from '../components/Customers/AddCustomer';
import CreateCampaign from '../components/Campaigns/CreateCampaign';

const Dashboard = () => {
    const { logout } = useContext(AuthContext);

    return (
        <div>
            <button onClick={logout}>Logout</button>
            <h2>Customer Management</h2>
            <AddCustomer />
            <h2>Campaign Management</h2>
            <CreateCampaign />
        </div>
    );
};

export default Dashboard;
