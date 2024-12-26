const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDb = require('./config/dbConnection');
const userRoute = require('./routes/userRoute');
const authmiddleware = require('./middleware/authmiddleware');
const PORT = process.env.PORT || 5000;

dotenv.config();
connectDb();

// Middleware
app.use(bodyParser.json());

// Protected routes (middleware applies here)
app.use('/api/auth', authmiddleware, userRoute);

// You can have unprotected routes above (if needed)
app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
