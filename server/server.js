require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3000/sets', 'https://avigailsart.com', 'https://avigailsart.com/sets'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
}));
app.use(express.json());
app.use(express.static('public'));

app.use(bodyParser.raw({ type: 'application.json' }));

const paintings = [
    {
        id: 1,
        image: "/images/hibiscus.jpg",
        name: 'Hibiscus',
        price: "175",
        stripeId: 'price_1Q9Y3p08itiWYv2ZOVkm99ZE',
        size: " 24x30",
        orientation: 'portrait',
    },
    {
        id: 2,
        image: "/images/perspective.jpg",
        name: "It's all about Perspective",
        price: "150",
        stripeId: 'price_1QKQ3k08itiWYv2ZgaYUrYt7',
        size: " 20x24",
        orientation: 'portrait',
    },
    {
        id: 3,
        image: "/images/melted-heart.jpg",
        name: 'Melted heart',
        price: "150",
        stripeId: 'price_1QKQ3p08itiWYv2ZT1qDmuwE',
        size: " 20x24",
        orientation: 'portrait',
    },
    {
        id: 4,
        image: "images/interHori.jpg",
        name: 'Intersecting Horizons',
        price: "175",
        stripeId: 'price_1QKQ4008itiWYv2ZSaGaLlYK',
        size: " 24x30",
        orientation: 'portrait',
    },
    {
        id: 5,
        image: "images/oneRoadHome.jpg",
        name: 'Only one road Home',
        price: "175",
        stripeId: 'price_1QKQ4108itiWYv2ZiXwX75p9',
        size: " 24x30",
        orientation: 'portrait',
    },
    {
        id: 6,
        image: "images/joshuaTree.jpg",
        name: 'Joshua Tree',
        price: "100",
        stripeId: 'price_1QKQ4208itiWYv2ZvTmI2tPz',
        size: " 16x20",
        orientation: 'portrait',
    },
    {
        id: 7,
        image: "images/selfExplain.jpg",
        name: 'Self Explanatory',
        price: "100",
        stripeId: 'price_1QKQ4G08itiWYv2ZzkFhcGo2',
        size: " 16x20",
        orientation: 'portrait',
    },
    {
        id: 8,
        image: "images/meditations.jpg",
        name: 'Meditations',
        price: "175",
        stripeId: 'price_1QKQ4I08itiWYv2Zcqykcjze',
        size: " 24x30",
        orientation: 'portrait',
    },
    {
        id: 9,
        image: "images/kingdoms.jpg",
        name: 'Many Kingdoms',
        price: "100",
        stripeId: 'price_1QKQ4J08itiWYv2ZiYFVAWkg',
        size: " 16x20",
        orientation: 'portrait',
    },
    {
        id: 10,
        image: "images/theWayHome.jpg",
        name: 'The Way Home',
        price: "100",
        stripeId: 'price_1QKQ4L08itiWYv2Z35zD85em',
        size: " 16x20",
        orientation: 'portrait',
    },
    {
        id: 11,
        image: "images/flowerShower.jpg",
        name: 'Flower Shower',
        price: "175",
        stripeId: 'price_1QKQ4N08itiWYv2ZrsT1HMdq',
        size: " 24x30",
        orientation: 'portrait',
    },
    {
        id: 12,
        image: "images/whisper.jpg",
        name: 'Whispers of Silence',
        price: "150",
        stripeId: 'price_1QKQ4P08itiWYv2ZgtkkFuKH',
        size: " 20x24",
        orientation: 'portrait',
    },
    {
        id: 13,
        image: "images/seaSplit.jpg",
        name: 'Splitting of the Sea',
        price: "150",
        stripeId: 'price_1QKQ9F08itiWYv2ZXu2MgksY',
        size: " 36x24",
        orientation: 'landscape',
    },
    {
        id: 14,
        image: "images/celebration.jpg",
        name: 'Celebration',
        price: "100",
        stripeId: 'price_1QN07g08itiWYv2ZBugw6GVh',
        size: " 48x12",
        orientation: 'landscape',
    },
    {
        id: 15,
        image: "images/israel.jpg",
        name: 'Long Live Israel',
        price: "100",
        stripeId: 'price_1QN08g08itiWYv2ZoX0nzmse',
        size: " 48x12",
        orientation: 'landscape',
    },
    {
        id: 16,
        image: "images/bliss.jpg",
        name: 'Bliss',
        price: "100",
        stripeId: 'price_1QN09F08itiWYv2ZHmRaF6DL',
        size: " 48x12",
        orientation: 'landscape',
    },
    {
        id: 17,
        image: "images/mtSinai.jpg",
        name: 'Mt. Sinai',
        price: "100",
        stripeId: 'price_1QN09F08itiWYv2ZHmRaF6DL',
        size: " 48x12",
        orientation: 'portrait',
    },
    {
        id: 18,
        image: "images/mamaRachel.jpg",
        name: 'Mama Rachel',
        price: "100",
        stripeId: 'price_1QN09F08itiWYv2ZHmRaF6DL',
        size: " 48x12",
        orientation: 'portrait',
    },
    {
        id: 19,
        image: "images/ifIForget.jpg",
        name: 'If I Forget',
        price: "100",
        stripeId: 'price_1QN09F08itiWYv2ZHmRaF6DL',
        size: " 48x12",
        orientation: 'portrait',
    },
    {
        id: 20,
        image: "images/theWall.jpg",
        name: 'The Wall',
        price: "100",
        stripeId: 'price_1QN09F08itiWYv2ZHmRaF6DL',
        size: " 48x12",
        orientation: 'portrait',
    },
    {
        id: 21,
        image: "images/galaxy.jpg",
        name: 'Galaxy',
        price: "100",
        stripeId: 'price_1QN09F08itiWYv2ZHmRaF6DL',
        size: " 48x12",
        orientation: 'portrait',
    },
    {
        id: 22,
        image: "images/tanz.jpg",
        name: 'Tanz',
        price: "100",
        stripeId: 'price_1QN09F08itiWYv2ZHmRaF6DL',
        size: " 48x12",
        orientation: 'portrait',
    },
    {
        id: 23,
        image: "images/beatbox.jpg",
        name: 'Beatbox',
        price: "100",
        stripeId: 'price_1QN09F08itiWYv2ZHmRaF6DL',
        size: " 48x12",
        orientation: 'portrait',
    },
    {
        id: 24,
        image: "images/mamaRachel2.jpg",
        name: 'Mama Rachel 2',
        price: "100",
        stripeId: 'price_1QN09F08itiWYv2ZHmRaF6DL',
        size: " 48x12",
        orientation: 'portrait',
    },
    {
        id: 25,
        image: "images/skiing.jpg",
        name: 'Skiing',
        price: "100",
        stripeId: 'price_1QN09F08itiWYv2ZHmRaF6DL',
        size: " 48x12",
        orientation: 'portrait',
    },
    {
        id: 26,
        image: "images/wailingWall.jpg",
        name: 'Wailing Wall',
        price: "100",
        stripeId: 'price_1QN09F08itiWYv2ZHmRaF6DL',
        size: " 48x12",
        orientation: 'portrait',
    },
    {
        id: 27,
        image: "images/cityDrive.jpg",
        name: 'City Drive',
        price: "100",
        stripeId: 'price_1QN09F08itiWYv2ZHmRaF6DL',
        size: " 48x12",
        orientation: 'portrait',
    },
];

const sets = [
    {
        id: 1,
        image: "/images/abstract-flowers-1.jpg",
        name: "Single flowers",
        price: "175",
        stripeId: 'price_1QKQ3r08itiWYv2Z4upsUMdw',
        size: ' 30x24',
        orientation: 'landscape',
    },
    {
        id: 2,
        image: "/images/abstract-flowers-2.jpg",
        name: "Double flowers",
        price: "175",
        stripeId: 'price_1QKQ3t08itiWYv2ZYwF65lZt',
        size: ' 30x24',
        orientation: 'landscape',
    },
    {
        id: 3,
        image: "/images/abstract-flowers-3.jpg",
        name: "Triple flowers",
        price: "175",
        stripeId: 'price_1QKQ3v08itiWYv2ZMSaI7V9k',
        size: ' 30x24',
        orientation: 'landscape',
    },
    {
        id: 5,
        image: "/images/check.jpg",
        name: "Check",
        price: "125",
        stripeId: 'price_1QKQ3w08itiWYv2Z6UqwzrZy',
        size: ' 20x24',
        orientation: 'portrait',
    },
    {
        id: 6,
        image: "/images/ex.jpg",
        name: "Ex",
        price: "125",
        stripeId: 'price_1QKQ3y08itiWYv2Zf3RZP59m',
        size: ' 20x24',
        orientation: 'portrait',
    },
];

const sold = [
    {
        id: 1,
        image: "/images/soldBaisPainting.jpg",
        orientation: 'portrait',
    },
    {
        id: 2,
        image: "/images/soldSplitPainting.jpg",
        orientation: 'landscape',
    },
    {
        id: 3,
        image: "/images/westernWallSold.jpg",
        orientation: 'portrait',
    },
    {
        id: 4,
        image: "/images/jerusalemWalkway.jpg",
        orientation: 'portrait',
    },
    {
        id: 5,
        image: "images/sunsetSailing.jpg",
        name: 'Sunset Sailing',
        orientation: 'portrait',
    }
]

app.get('/api/paintings', (req, res) => {
    res.json(paintings);
});

app.get('/api/sets', (req, res) => {
    res.json(sets);
});

app.get('/api/sold', (req, res) => {
    res.json(sold);
});

app.post('/create-checkout-session', async (req, res) => {
    const { stripeId } = req.body;
    try {
        const session = await stripe.checkout.sessions.create({
            success_url: 'http://localhost:3000/success',
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

app.post('/webhook', (req, res) => {
    const sig = req.headers['stripe-signature'];

    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_SECRET_KEY);
    } catch (err) {
        console.log(`⚠️  Webhook signature verification failed.`, err.message);
        return res.sendStatus(400);
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;

        paintings = paintings.filter(painting => painting.stripeId !== session.line_items[0].price);
        console.log('Updated paintings');
    }

    res.status(200);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});