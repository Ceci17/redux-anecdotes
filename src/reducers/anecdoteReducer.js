import anecdoteService from "../services/anecdotes";

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_ANECDOTES":
      return action.data;
    case "VOTE":
      const id = action.data.id;

      const votedAnecdote = state.find((anecdote) => anecdote.id === id);

      const updatedVotedAnecdote = {
        ...votedAnecdote,
        votes: votedAnecdote.votes + 1,
      };

      return state.map((anecdote) =>
        anecdote.id !== votedAnecdote.id ? anecdote : updatedVotedAnecdote
      );
    case "NEW_ANECDOTE":
      return [...state, action.data];
    default:
      return state;
  }
};

export const vote = (id, data) => {
  return async (dispatch) => {
    const updatedAnecdote = { ...data, votes: data.votes + 1 };
    const response = await anecdoteService.update(id, updatedAnecdote);
    dispatch({
      type: "VOTE",
      data: response,
    });
  };
};

export const createAnecdote = (anecdote) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(anecdote);
    dispatch({ type: "NEW_ANECDOTE", data: newAnecdote });
  };
};

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: "INIT_ANECDOTES",
      data: anecdotes,
    });
  };
};

export default anecdoteReducer;
