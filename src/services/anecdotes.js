import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (data) => {
  const anecdote = { content: data, votes: 0 };
  const response = await axios.post(`${baseUrl}`, anecdote);
  return response.data;
};

const update = async (id, data) => {
  const response = await axios.put(`${baseUrl}/${id}`, data);
  return response.data;
};

export default {
  getAll,
  createNew,
  update,
};
