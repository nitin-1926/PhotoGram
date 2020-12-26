const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const PORT = 5000;
const { MONGO_URI } = require('./keys');

require('./models/user');

app.use(require('./routes/auth'));
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

app.listen(PORT, () => {
    console.log('Server is running on PORT: ', PORT);
});