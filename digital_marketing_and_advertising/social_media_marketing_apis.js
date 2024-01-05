```javascript
// Import necessary modules
const express = require('express');
const router = express.Router();

// Import necessary utilities
const apiUtils = require('../utils/api_utils');
const dataUtils = require('../utils/data_utils');
const errorUtils = require('../utils/error_utils');

// Route to get all social media marketing APIs
router.get('/', (req, res) => {
    try {
        const socialMediaMarketingApis = dataUtils.getAllSocialMediaMarketingApis();
        res.json(socialMediaMarketingApis);
    } catch (error) {
        errorUtils.handleError(res, error);
    }
});

// Route to get a specific social media marketing API by id
router.get('/:id', (req, res) => {
    try {
        const socialMediaMarketingApi = dataUtils.getSocialMediaMarketingApiById(req.params.id);
        if (!socialMediaMarketingApi) {
            res.status(404).json({ message: 'Social Media Marketing API not found' });
        } else {
            res.json(socialMediaMarketingApi);
        }
    } catch (error) {
        errorUtils.handleError(res, error);
    }
});

// Route to create a new social media marketing API
router.post('/', (req, res) => {
    try {
        const newSocialMediaMarketingApi = dataUtils.createSocialMediaMarketingApi(req.body);
        res.status(201).json(newSocialMediaMarketingApi);
    } catch (error) {
        errorUtils.handleError(res, error);
    }
});

// Route to update a social media marketing API by id
router.put('/:id', (req, res) => {
    try {
        const updatedSocialMediaMarketingApi = dataUtils.updateSocialMediaMarketingApi(req.params.id, req.body);
        if (!updatedSocialMediaMarketingApi) {
            res.status(404).json({ message: 'Social Media Marketing API not found' });
        } else {
            res.json(updatedSocialMediaMarketingApi);
        }
    } catch (error) {
        errorUtils.handleError(res, error);
    }
});

// Route to delete a social media marketing API by id
router.delete('/:id', (req, res) => {
    try {
        const deletedSocialMediaMarketingApi = dataUtils.deleteSocialMediaMarketingApi(req.params.id);
        if (!deletedSocialMediaMarketingApi) {
            res.status(404).json({ message: 'Social Media Marketing API not found' });
        } else {
            res.json(deletedSocialMediaMarketingApi);
        }
    } catch (error) {
        errorUtils.handleError(res, error);
    }
});

module.exports = router;
```
