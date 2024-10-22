require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3000/sets'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
}));
app.use(express.json());
app.use(express.static('public'));

const paintings = [
    {
        id: 1,
        image: "/images/hibiscus.jpg",
        name: 'Hibiscus',
        price: "125",
        stripeId: 'price_1Q9YOT08itiWYv2Zbv9V51OY',
    },
    {
        id: 2,
        image: "/images/perspective.jpg",
        name: "It's all about Perspective",
        price: "125",
        stripeId: 'price_1QAIAj08itiWYv2ZCleissrf',
    },
    {
        id: 3,
        image: "/images/melted-heart.jpg",
        name: 'Melted heart',
        price: "125",
        stripeId: 'price_1QCS9O08itiWYv2Z1H46DYtZ',
    }
];

const sets = [
    {
        id: 1,
        image: "/images/abstract-flowers-1.jpg",
        name: "Single flowers",
        price: "125",
        stripeId: 'price_1QCSGe08itiWYv2ZunEGzRWy',
    },
    {
        id: 2,
        image: "/images/abstract-flowers-2.jpg",
        name: "Double flowers",
        price: "125",
        stripeId: 'price_1QCSJS08itiWYv2Zb7viUWpH',
    },
    {
        id: 3,
        image: "/images/abstract-flowers-3.jpg",
        name: "Triple flowers",
        price: "125",
        stripeId: 'price_1QCSK808itiWYv2ZLdbtZEKX',
    },
    {
        id: 5,
        image: "/images/check.jpg",
        name: "Check",
        price: "125",
        stripeId: 'price_1QCSL408itiWYv2Zn1LrUuYb',
    },
    {
        id: 6,
        image: "/images/ex.jpg",
        name: "Ex",
        price: "125",
        stripeId: 'price_1QCSLs08itiWYv2ZB7CXoykR',
    },
];

app.get('/api/paintings', (req, res) => {
    res.json(paintings);
});

app.get('/api/sets', (req, res) => {
    res.json(sets);
});

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

app.post('/create-checkout-session', async (req, res) => {
    const { stripeId } = req.body;
    try {
        const session = await stripe.checkout.sessions.create({
            success_url: 'http://localhost:3000',
            cancel_url: 'http://localhost:3000',
            line_items: [
                {
                    price: stripeId,
                    quantity: 1,
                },
            ],
            mode: 'payment',
        });
        console.log('session id:', session.id, 
                    'session url:', session.url);
        res.json({ url: session.url });
        const sessionId = session.id;
        console.log('sessionId:', sessionId);

    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});