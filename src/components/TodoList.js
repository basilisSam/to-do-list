import React from "react";

const TodoList = ({ todos, deleteHandler }) => {
  return (
    <div className='flex flex-col justify-center items-center pt-10'>
      {todos.map((todos) => (
        <p
          className='border border-black border-opacity-100 pt-3 w-72 text-center rounded'
          key={todos.id}
        >
          {todos.title}

          <input
            type='submit'
            value='Delete'
            onClick={() => deleteHandler(todos.id)}
            className='bg-red-600 text-white w-20 ml-10 rounded-3xl  '
          />
        </p>
      ))}
    </div>
  );
};

export default TodoList;
