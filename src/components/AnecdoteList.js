import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import { showNotification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const sortedAnecdotes = useSelector((state) =>
    state.anecdotes.sort((curr, next) => next.votes - curr.votes)
  );
  const filter = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const showAnecdotes = sortedAnecdotes?.filter((anecdote) =>
    anecdote?.content?.toLowerCase().includes(filter.toLowerCase())
  );

  const voteFor = (anecdote) => {
    dispatch(vote(anecdote.id, anecdote));
    dispatch(showNotification(`You voted for '${anecdote.content}'`, 5000));
  };

  return (
    <div>
      {showAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => voteFor(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
