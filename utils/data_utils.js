```javascript
const fs = require('fs');
const path = require('path');

const readDataFromFile = (filePath) => {
  try {
    const data = fs.readFileSync(path.resolve(__dirname, filePath), 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Failed to read data from ${filePath}: ${error}`);
    throw error;
  }
};

const writeDataToFile = (filePath, data) => {
  try {
    fs.writeFileSync(path.resolve(__dirname, filePath), JSON.stringify(data, null, 2));
    console.log(`Data successfully written to ${filePath}`);
  } catch (error) {
    console.error(`Failed to write data to ${filePath}: ${error}`);
    throw error;
  }
};

module.exports = {
  readDataFromFile,
  writeDataToFile,
};
```
