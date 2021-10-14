import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteHandler, handleEditClick }) => {
  return (
    <div className='flex flex-col justify-center items-center pt-10'>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          deleteHandler={deleteHandler}
          handleEditClick={handleEditClick}
          key={todo.id}
        />
      ))}
    </div>
  );
};

export default TodoList;
