// twitterClient.js
const { TwitterApi } = require('twitter-api-v2');
require('dotenv').config();

const twitterClient = new TwitterApi(process.env.TWITTER_BEARER_TOKEN);
const rwClient = twitterClient.readOnly;

module.exports = rwClient;
