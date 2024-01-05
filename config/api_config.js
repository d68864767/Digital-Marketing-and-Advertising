```javascript
// This file contains the configuration for the APIs used in the project

module.exports = {
  digitalMarketingAndAdvertising: {
    adCampaignManagement: {
      baseURL: 'https://api.adcampaignmanagement.com',
      apiKey: process.env.ADCAMPAIGNMANAGEMENT_API_KEY,
    },
    seoOptimizationTools: {
      baseURL: 'https://api.seooptimizationtools.com',
      apiKey: process.env.SEOOPTIMIZATIONTOOLS_API_KEY,
    },
    socialMediaMarketingApis: {
      baseURL: 'https://api.socialmediamarketingapis.com',
      apiKey: process.env.SOCIALMEDIAMARKETINGAPIS_API_KEY,
    },
    audienceTargetingAndAnalytics: {
      baseURL: 'https://api.audiencetargetingandanalytics.com',
      apiKey: process.env.AUDIENCETARGETINGANDANALYTICS_API_KEY,
    },
  },
  // Add other API configurations here following the same structure
};
```
