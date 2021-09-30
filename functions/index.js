const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { request, response } = require('express');
const stripe = require('stripe')(
  'sk_test_51JfEZUBnijroR2rDabTU3VgUCLJkpGs35dcKSfahxR0CPedsigdrKDFXySCUYFPsmaQwgSnQrAYEx7DZ7brm790200XK28umjb',
);

//API

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('hello word'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;
  console.log(total), 'payment request';
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });

  response.status(201).send({
      clientSecret : paymentIntent.client_secret
  })
});

//Listen command

exports.api = functions.https.onRequest(app);
