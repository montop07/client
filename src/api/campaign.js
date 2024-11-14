import axios from 'axios';

export const createCampaign = (campaignData) =>
    axios.post(`${process.env.REACT_APP_API_URL}/campaigns/create`, campaignData);
