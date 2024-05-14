const mongoose = require('mongoose');

const password = "MTQ4ODUtcGF0cmlj"; // Replace this with your actual password
const mongoURI = `mongodb://root:${password}@127.0.0.1:27017`;

const connectToMongo = async (retryCount) => {
    const MAX_RETRIES = 3;
    const count = retryCount ?? 0;
    try {
        await mongoose.connect(mongoURI, { dbName: 'stayhealthybeta1'});
        console.info('Connected to Mongo Successfully');

        return;
    } catch (error) {
        console.error(error);

        const nextRetryCount = count + 1;

        if (nextRetryCount >= MAX_RETRIES) {
            throw new Error('Unable to connect to Mongo!');
        }

        console.info(`Retrying, retry count: ${nextRetryCount}`);

        return await connectToMongo(nextRetryCount);
    }
};

module.exports = connectToMongo;

const express = require('express');
const cors = require('cors');
const connectToMongo = require('./db');
const User = require('./models/User'); // Import the User model

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

const PORT = process.env.PORT || 8181;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectToMongo();

// Routes
app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Registration route
app.post('/api/register', async (req, res) => {
    const { name, email, password, phone } = req.body;

    try {
        // Check if user already exists with the given email
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ error: 'User already exists with this email' });
        }

        // Create a new user
        const newUser = new User({ name, email, password, phone });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ error: 'An error occurred. Please try again later.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
