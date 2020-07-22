import axios from "axios";

const baseUrl = "https://hacker-news.firebaseio.com/v0";

const getItem = async (id) => {
  const response = await axios.get(`${baseUrl}/item/${id}.json`);
  return response.data;
};

const getStories = async (type = "topstories") => {
  const response = await axios.get(`${baseUrl}/${type}.json`);
  const stories = await response.data;
  return stories;
};

export default { getStories, getItem };
