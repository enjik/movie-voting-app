const express = require('express');
const bodyParser = require('body-parser');

// New instance of application
const app = express();

// Port to listen to
const PORT = 3000;








app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
