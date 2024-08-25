const db = require('./connection');
const { Product } = require('../models');
const cleanDB = require('./cleanDB');


db.once('open', async () => {
  await cleanDB('Product', 'products');

  await Product.create({
    name: "Hibiscus2",
    price: "200"
  });

  await Product.create({
    name: "Rose2",
    price: "300"
  });

  const paintings = await Product.find();

  console.log('Products seeded', paintings);

  process.exit();
});
