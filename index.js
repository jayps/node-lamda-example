const express = require('express');
const greetRoutes = require('./routes/greet');

const app = express();
const port = 3000;

app.use('/greet', greetRoutes);

app.listen(port, () => {
    console.log(`The app is listening on port ${port}, request a greeting!`);
});