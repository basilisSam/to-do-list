import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/todos")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const deleteHandler = (id) => {
    fetch("http://localhost:8000/todos/" + id, {
      method: "DELETE",
    }).then(() => {
      setLoading(false);
      setData(
        data.filter((todos) => {
          return todos.id !== id;
        })
      );
    });
  };

  if (loading) return "Loading...";
  if (error) return "Error!";

  return (
    <div className='flex flex-col justify-center items-center pt-10'>
      {data.map((todos) => (
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
