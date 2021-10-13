import React from "react";

const SearchTodo = ({ searchTodos, handleSearch }) => {
  return (
    <form className='pt-8 '>
      <label htmlFor='updateTodo'>Search Todo: </label>
      <input
        className='border-2 border-red-500 rounded-lg  '
        name='updateTodo'
        type='text'
        placeholder='Search Todo'
        onChange={(e) => handleSearch(e.target.value)}
      />
      {searchTodos !== null &&
        searchTodos.map((todo) => <p key={todo.id}>{todo.title} </p>)}
    </form>
  );
};

export default SearchTodo;
