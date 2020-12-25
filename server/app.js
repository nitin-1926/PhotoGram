const express = require('express');
const app = express();
const PORT = 5000;

const customMiddleware = (req, res, next) => {
    console.log(' Middleware Executed');
    next();
};
// If MiddleWare written here then it's executed before each route. If you want it for specific routes then remove it and add middleware to those routes only.
app.use(customMiddleware);
// app.get('/', customMiddleware, (req, res) => {
//     console.log('Home');
//     res.send('Hello World');
// });

app.get('/', (req, res) => {
    console.log('Home');
    res.send('Hello World');
});
app.get('/about', (req, res) => {
    console.log('About');
    res.send('About Page');
});

app.listen(PORT, () => {
    console.log('Server is running on PORT: ', PORT);
});
