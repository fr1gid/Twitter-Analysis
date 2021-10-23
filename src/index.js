import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { TwitterClient } from 'twitter-api-client';

const twitterClient = new TwitterClient({
  apiKey: '<1OpsPpaPvqWtg0M4Q3ZDa44fk>',
  apiSecret: '<6wXI9TJLeGMOMtXx4pnLoNm5UfsqsArXSWkH9OGxSTFY9GoLrG>',
  accessToken: '<1335744879369052160-pDBFJabJ9a10OUsyDaTJ68ccxfIhFB>',
  accessTokenSecret: '<vuxTI7VspWHDVWj5OfUoZd9RlhQtrg3Vk13rVpcYJUVO4>',
});

// Search for a user
const data = await twitterClient.accountsAndUsers.usersSearch({ q: 'twitterDev' });

// Get message event by Id
const data = await twitterClient.directMessages.directMessagesEventsShow({ id: '1234' });

// Get most recent 25 retweets of a tweet
const data = await twitterClient.tweets.statusesRetweetsById({ id: '12345', count: 25 });

// Get local trends
const data = await twitterClient.trends.trendsAvailable();

ReactDOM.render(
  < App />,
  document.getElementById('root')
);
