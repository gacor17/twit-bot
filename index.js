const fs = require("fs");
const { TwitterApi } = require("twitter-api-v2");

const client = new TwitterApi({
  appKey: process.env.API_KEY,
  appSecret: process.env.API_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_SECRET,
});

const data = JSON.parse(fs.readFileSync("data.json"));

async function postTweet() {
  const item = data[Math.floor(Math.random() * data.length)];

  await client.v2.tweet(`${item.text} ${item.link}`);
}

postTweet();
