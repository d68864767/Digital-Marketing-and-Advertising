```javascript
// Import necessary modules
const express = require('express');
const router = express.Router();

// Import necessary utilities
const apiUtils = require('../utils/api_utils');
const dataUtils = require('../utils/data_utils');
const errorUtils = require('../utils/error_utils');

// Route to get all ad campaigns
router.get('/', (req, res) => {
    try {
        const adCampaigns = dataUtils.getAllAdCampaigns();
        res.json(adCampaigns);
    } catch (error) {
        errorUtils.handleError(res, error);
    }
});

// Route to get a specific ad campaign by id
router.get('/:id', (req, res) => {
    try {
        const adCampaign = dataUtils.getAdCampaignById(req.params.id);
        if (!adCampaign) {
            return res.status(404).json({ message: 'Ad campaign not found' });
        }
        res.json(adCampaign);
    } catch (error) {
        errorUtils.handleError(res, error);
    }
});

// Route to create a new ad campaign
router.post('/', (req, res) => {
    try {
        const newAdCampaign = dataUtils.createAdCampaign(req.body);
        res.json(newAdCampaign);
    } catch (error) {
        errorUtils.handleError(res, error);
    }
});

// Route to update an existing ad campaign
router.put('/:id', (req, res) => {
    try {
        const updatedAdCampaign = dataUtils.updateAdCampaign(req.params.id, req.body);
        if (!updatedAdCampaign) {
            return res.status(404).json({ message: 'Ad campaign not found' });
        }
        res.json(updatedAdCampaign);
    } catch (error) {
        errorUtils.handleError(res, error);
    }
});

// Route to delete an ad campaign
router.delete('/:id', (req, res) => {
    try {
        const deletedAdCampaign = dataUtils.deleteAdCampaign(req.params.id);
        if (!deletedAdCampaign) {
            return res.status(404).json({ message: 'Ad campaign not found' });
        }
        res.json(deletedAdCampaign);
    } catch (error) {
        errorUtils.handleError(res, error);
    }
});

module.exports = router;
```
