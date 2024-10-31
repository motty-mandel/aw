require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3000/sets', 'https://avigailsart.com', 'https://avigailsart.com/sets'],
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
        size: "24x30",
    },
    {
        id: 2,
        image: "/images/perspective.jpg",
        name: "It's all about Perspective",
        price: "125",
        stripeId: 'price_1QAIAj08itiWYv2ZCleissrf',
        size: "20x24",
    },
    {
        id: 3,
        image: "/images/melted-heart.jpg",
        name: 'Melted heart',
        price: "125",
        stripeId: 'price_1QCS9O08itiWYv2Z1H46DYtZ',
        size: "20x24",
    },
    {
        id: 4,
        image: "images/interHori.jpg",
        name: 'Intersecting Horizons',
        price: "125",
        stripeId: 'price_1QFil508itiWYv2ZuwZkUkhs',
        size: "24x30",
    },
    {
        id: 5,
        image: "images/oneRoadHome.jpg",
        name: 'Only one road Home',
        price: "125",
        stripeId: 'price_1QFioG08itiWYv2ZGaAG0P3L',
        size: "24x30",
    },
    {
        id: 6,
        image: "images/joshuaTree.jpg",
        name: 'Joshua Tree',
        price: "125",
        stripeId: 'price_1QFiq108itiWYv2Zjh8F9DC5',
        size: "16x20",
    },
    {
        id: 7,
        image: "images/selfExplain.jpg",
        name: 'Self Explanatory',
        price: "125",
        stripeId: 'price_1QFisE08itiWYv2ZEm8IkpaV',
        size: "16x20",
    },
    {
        id: 8,
        image: "images/meditations.jpg",
        name: 'Meditations',
        price: "125",
        stripeId: 'price_1QFiuF08itiWYv2ZRX3v3VBA',
        size: "24x30",
    },
    {
        id: 9,
        image: "images/kingdoms.jpg",
        name: 'Many Kingdoms',
        price: "125",
        stripeId: 'price_1QFiws08itiWYv2ZTm71P5OO',
        size: "16x20",
    },
    {
        id: 10,
        image: "images/theWayHome.jpg",
        name: 'The Way Home',
        price: "125",
        stripeId: 'price_1QFiz208itiWYv2ZGuy1IlCu',
        size: "16x20",
    },
    {
        id: 11,
        image: "images/flowerShower.jpg",
        name: 'Flower Shower',
        price: "125",
        stripeId: 'price_1QFj0G08itiWYv2ZFY5zKhcQ',
        size: "24x30",
    },
    {
        id: 12,
        image: "images/whisper.jpg",
        name: 'Whispers of Silence',
        price: "125",
        stripeId: 'price_1QFj5L08itiWYv2ZRQyXpZ4m',
        size: "20x24",
    }
];

const sets = [
    {
        id: 1,
        image: "/images/abstract-flowers-1.jpg",
        name: "Single flowers",
        price: "125",
        stripeId: 'price_1QCSGe08itiWYv2ZunEGzRWy',
        size: '30x24',
    },
    {
        id: 2,
        image: "/images/abstract-flowers-2.jpg",
        name: "Double flowers",
        price: "125",
        stripeId: 'price_1QCSJS08itiWYv2Zb7viUWpH',
        size: '30x24',
    },
    {
        id: 3,
        image: "/images/abstract-flowers-3.jpg",
        name: "Triple flowers",
        price: "125",
        stripeId: 'price_1QCSK808itiWYv2ZLdbtZEKX',
        size: '30x24',
    },
    {
        id: 5,
        image: "/images/check.jpg",
        name: "Check",
        price: "125",
        stripeId: 'price_1QCSL408itiWYv2Zn1LrUuYb',
        size: '20x24',
    },
    {
        id: 6,
        image: "/images/ex.jpg",
        name: "Ex",
        price: "125",
        stripeId: 'price_1QCSLs08itiWYv2ZB7CXoykR',
        size: '20x24',
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
            success_url: 'https://avigailsart.com',
            cancel_url: 'https://avigailsart.com',
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