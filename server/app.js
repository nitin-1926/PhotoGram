const express = require('express');
const app = express();
const PORT = 5000;

const customMiddleware = (req, res, next) => {
    console.log(' Middleware Executed');
    next();
};

app.use(customMiddleware);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log('Server is running on PORT: ', PORT);
});
