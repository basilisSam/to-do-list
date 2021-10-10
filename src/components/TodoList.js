import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteHandler, editHandler }) => {
  return (
    <div className='flex flex-col justify-center items-center pt-10'>
      {todos.map((todos) => (
        <TodoItem
          todos={todos}
          deleteHandler={deleteHandler}
          editHandler={editHandler}
          key={todos.id}
        />
      ))}
    </div>
  );
};

export default TodoList;
