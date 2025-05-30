const axios = require('axios');

exports.handler = async function () {
    const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
    const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

    console.log("YOUTUBE_API_KEY:", process.env.YOUTUBE_API_KEY);
    console.log("YOUTUBE_CHANNEL_ID:", process.env.YOUTUBE_CHANNEL_ID);

  const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=4`;

  try {
    const res = await axios.get(url);
    const videos = res.data.items
      .filter(item => item.id.kind === 'youtube#video')
      .map(item => ({
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url,
      }));

    return {
      statusCode: 200,
      body: JSON.stringify(videos),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
