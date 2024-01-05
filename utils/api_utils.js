```javascript
const axios = require('axios');

const get = async (url, params) => {
  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch data from ${url}: ${error}`);
    throw error;
  }
};

const post = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.error(`Failed to post data to ${url}: ${error}`);
    throw error;
  }
};

module.exports = {
  get,
  post,
};
```
