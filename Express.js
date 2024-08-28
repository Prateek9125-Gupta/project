const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // Fetch data from your API or data source
  const data = {
    // Example data
    price: 2656110,
    stats: {
      '5 Mins': 0.1,
      '1 Hour': 0.96,
      '1 Day': 2.73,
      '7 Days': 7.51
    },
    // ... more data for the table
  };

  // Render the HTML template with the fetched data
  res.render('index', { data });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});