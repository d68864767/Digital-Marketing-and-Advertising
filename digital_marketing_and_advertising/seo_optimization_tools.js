```javascript
// Import necessary modules
const express = require('express');
const router = express.Router();

// Import necessary utilities
const apiUtils = require('../utils/api_utils');
const dataUtils = require('../utils/data_utils');
const errorUtils = require('../utils/error_utils');

// Route to get all SEO tools
router.get('/', (req, res) => {
    try {
        const seoTools = dataUtils.getAllSeoTools();
        res.json(seoTools);
    } catch (error) {
        errorUtils.handleError(res, error);
    }
});

// Route to get a specific SEO tool by id
router.get('/:id', (req, res) => {
    try {
        const seoTool = dataUtils.getSeoToolById(req.params.id);
        if (!seoTool) {
            return res.status(404).json({ message: 'SEO tool not found' });
        }
        res.json(seoTool);
    } catch (error) {
        errorUtils.handleError(res, error);
    }
});

// Route to create a new SEO tool
router.post('/', (req, res) => {
    try {
        const newSeoTool = dataUtils.createSeoTool(req.body);
        res.json(newSeoTool);
    } catch (error) {
        errorUtils.handleError(res, error);
    }
});

// Route to update an existing SEO tool
router.put('/:id', (req, res) => {
    try {
        const updatedSeoTool = dataUtils.updateSeoTool(req.params.id, req.body);
        if (!updatedSeoTool) {
            return res.status(404).json({ message: 'SEO tool not found' });
        }
        res.json(updatedSeoTool);
    } catch (error) {
        errorUtils.handleError(res, error);
    }
});

// Route to delete an existing SEO tool
router.delete('/:id', (req, res) => {
    try {
        const deletedSeoTool = dataUtils.deleteSeoTool(req.params.id);
        if (!deletedSeoTool) {
            return res.status(404).json({ message: 'SEO tool not found' });
        }
        res.json(deletedSeoTool);
    } catch (error) {
        errorUtils.handleError(res, error);
    }
});

module.exports = router;
```
