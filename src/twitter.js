// get tweets from twitter
const token = process.env["TWITTER_BEARER_TOKEN"]

const fetchTweetsFromUser = async (screenName, count) => {
  const response = await fetch(
    `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${screenName}&count=${count}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  const json = await response.json()
  return json
}