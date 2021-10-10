import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(null);
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
        setTodos(data);
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

  if (loading) return "Loading...";
  if (error) return "Error!";

  const deleteHandler = (id) => {
    fetch("http://localhost:8000/todos/" + id, {
      method: "DELETE",
    }).then(() => {
      setLoading(false);
      setTodos(
        todos.filter((todos) => {
          return todos.id !== id;
        })
      );
    });
  };
  const editHandler = (id) => {
    fetch("http://localhost:8000/todos/" + id, {
      method: "DELETE",
    }).then(() => {
      setLoading(false);
      setTodos(
        todos.filter((todos) => {
          return todos.id !== id;
        })
      );
    });
  };

  const handleSubmit = (e, title) => {
    const todo = { title };
    e.preventDefault();
    fetch("http://localhost:8000/todos/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    })
      .then((response) => response.json())
      .then((todo) => {
        setLoading(false);
        setTodos([...todos, todo]);
      });
  };

  return (
    <div className='App'>
      <h1 className='font-sans text-5xl'>THINGS TO DO</h1>
      <InputField handleSubmit={handleSubmit} />
      <TodoList
        todos={todos}
        deleteHandler={deleteHandler}
        editHandler={editHandler}
      />
      <Footer />
    </div>
  );
}

export default App;
