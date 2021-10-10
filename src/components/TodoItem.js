import React from "react";

const TodoItem = ({ todos, deleteHandler, editHandler }) => {
  return (
    <div className='flex flex-col justify-center items-center pt-2'>
      <p
        className='border border-black border-opacity-100 pt-3 w-72 text-center rounded'
        key={todos.id}
      >
        {todos.title}

        <button
          className='bg-red-600 text-white w-20 ml-5 rounded-3xl  '
          onClick={() => deleteHandler(todos.id)}
        >
          Delete
        </button>

        <button
          className='bg-red-600 text-white w-20 ml-5 rounded-3xl  '
          onClick={() => editHandler(todos.id)}
        >
          Edit
        </button>
      </p>
    </div>
  );
};

export default TodoItem;
