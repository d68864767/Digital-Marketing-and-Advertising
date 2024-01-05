```javascript
// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import routes
const adCampaignManagementRoutes = require('./digital_marketing_and_advertising/ad_campaign_management');
const seoOptimizationToolsRoutes = require('./digital_marketing_and_advertising/seo_optimization_tools');
const socialMediaMarketingApisRoutes = require('./digital_marketing_and_advertising/social_media_marketing_apis');
const audienceTargetingAndAnalyticsRoutes = require('./digital_marketing_and_advertising/audience_targeting_and_analytics');

// Initialize the app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Use routes
app.use('/api/ad-campaign-management', adCampaignManagementRoutes);
app.use('/api/seo-optimization-tools', seoOptimizationToolsRoutes);
app.use('/api/social-media-marketing-apis', socialMediaMarketingApisRoutes);
app.use('/api/audience-targeting-and-analytics', audienceTargetingAndAnalyticsRoutes);

// Handle production
if (process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/public/'));

    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

// Set port
const port = process.env.PORT || 5000;

// Start server
app.listen(port, () => console.log(`Server started on port ${port}`));
```
