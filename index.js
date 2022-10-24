const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send(`<h1 style="text-align: center">IT HUB Server is Running...</h1>`);

})
app.listen(port, () => {
    console.log(`Server is Running on port ${port}`);
})