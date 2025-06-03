// utils/filterTweets.js
module.exports = function (tweet) {
  const metrics = tweet.public_metrics;
  const text = tweet.text.toLowerCase();

  const keywords = ['breaking', 'shocking', 'wtf', '🔥'];
  const isViral = metrics.like_count > 1000 || metrics.retweet_count > 500;

  return (
    keywords.some(word => text.includes(word)) ||
    isViral
  );
};
