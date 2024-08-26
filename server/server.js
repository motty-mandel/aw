require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});

const Product = require('./models/Product.js');

app.get('/api/paintings', async (req, res) => {
    try {
        const paintings = await Product.find().select('-__v');
        res.json(paintings);
    } catch (err) {
        console.error('Error fetching paintings:', err);
        res.status(500).send(err);
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
});