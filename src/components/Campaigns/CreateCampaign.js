import React, { useState } from 'react';
import { createCampaign } from '../../api/campaign';

const CreateCampaign = () => {
    const [campaign, setCampaign] = useState({ segmentId: '', message: '' });

    const handleChange = (e) => setCampaign({ ...campaign, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createCampaign(campaign);
        alert('Campaign created successfully');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="segmentId" onChange={handleChange} placeholder="Audience Segment ID" />
            <input type="text" name="message" onChange={handleChange} placeholder="Message" />
            <button type="submit">Create Campaign</button>
        </form>
    );
};

export default CreateCampaign;
