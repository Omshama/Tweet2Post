const rwClient = require('./twitterClient');
const filterTweets = require('./utils/filterTweets');
const sendEmail = require('./emailService');

const fetchRecentTweets = async () => {
  try {
    const user = await rwClient.v2.userByUsername('AdityaRajKaul');
    const tweets = await rwClient.v2.userTimeline(user.data.id, {
      max_results: 5,
      'tweet.fields': 'created_at,public_metrics',

    });

    for (const tweet of tweets.data.data) {
      if (filterTweets(tweet)) {
        console.log('🔥 Insane Tweet:', tweet.text);
        await sendEmail(tweet);
      }
    }
  } catch (err) {
    console.error('Error:', err);
  }
};

fetchRecentTweets();
