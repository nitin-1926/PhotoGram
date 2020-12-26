const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 5000;
const { MONGO_URI } = require('./keys');

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});
mongoose.connection.on('error', err => {
    console.log('Error Connecting to MongoDB', err);
});
// If MiddleWare written here then it's executed before each route. If you want it for specific routes then remove it and add middleware to those routes only.
// app.use(customMiddleware);
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