import React from "react";

const SearchTodo = ({ searchTodos, handleSearch }) => {
  return (
    <div className='flex flex-col justify-center items-center pt-2'>
      <input
        className='border-2 border-red-500 rounded-lg  '
        name='updateTodo'
        type='text'
        placeholder='Search Todo'
        onChange={(e) => handleSearch(e.target.value)}
      />
      {searchTodos !== null &&
        searchTodos.map((todo) => (
          <p
            className='border border-black border-opacity-100 pt-3 w-72 text-center rounded'
            key={todo.id}
          >
            {todo.title}{" "}
          </p>
        ))}
    </div>
  );
};

export default SearchTodo;
