const express = require('express'); 
const app = express();
const PORT = process.env.PORT ?? 3000;

app.get('/', (req, res) => {
    res.send('Node.js app on AWS EC2');
});

app.listen(PORT, () => {
    console.log(`The server is run here: http://localhost:${PORT}`)
});
