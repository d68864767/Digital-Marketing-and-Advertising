```javascript
// Import necessary modules
const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import routes
const adCampaignManagementRoutes = require('../digital_marketing_and_advertising/ad_campaign_management');
const seoOptimizationToolsRoutes = require('../digital_marketing_and_advertising/seo_optimization_tools');
const socialMediaMarketingApisRoutes = require('../digital_marketing_and_advertising/social_media_marketing_apis');
const audienceTargetingAndAnalyticsRoutes = require('../digital_marketing_and_advertising/audience_targeting_and_analytics');

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

describe('Digital Marketing and Advertising API', () => {
    it('should fetch all ad campaigns', async () => {
        const res = await request(app).get('/api/ad-campaign-management');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('adCampaigns');
    });

    it('should fetch all SEO tools', async () => {
        const res = await request(app).get('/api/seo-optimization-tools');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('seoTools');
    });

    it('should fetch all social media marketing APIs', async () => {
        const res = await request(app).get('/api/social-media-marketing-apis');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('socialMediaMarketingApis');
    });

    it('should fetch all audience targeting and analytics', async () => {
        const res = await request(app).get('/api/audience-targeting-and-analytics');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('audienceTargetingAndAnalytics');
    });
});
```
