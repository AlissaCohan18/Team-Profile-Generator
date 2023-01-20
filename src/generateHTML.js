const fs = require('fs');

// Function to create the HTML file
module.exports = createHTML => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', createHTML, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};
