import axios from 'axios';

const KEY = "AIzaSyBWDkeRvVfVpDeE4Go-J7MJGbnA018VSAk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: KEY,
    part: 'snippet',
    maxResults: 5
  }
});

