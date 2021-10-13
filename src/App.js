import { useEffect, useState } from "react";
import "./App.css";
import EditForm from "./components/EditForm";
import Footer from "./components/Footer";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import SearchTodo from "./components/SearchTodo";

function App() {
  const [todos, setTodos] = useState(null);
  const [currentTodo, setCurrentTodo] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTodos, setSearchTodos] = useState(null);

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
  //Edit Form Section**********************************************
  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, title: e.target.value });
    console.log(currentTodo);
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();

    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  }
  function handleEditClick(id) {
    setIsEditing(true);
    setCurrentTodo(
      todos.find((todos) => {
        return todos.id === id;
      })
    );
  }

  const handleSearch = (title) => {
    setSearchTodos(
      todos.filter((todos) => {
        console.log(todos);
        return todos.title.includes(title);
      })
    );
    console.log(title);
    console.log(searchTodos);
  };

  return (
    <div className='App'>
      <h1 className='font-sans text-5xl'>THINGS TO DO</h1>
      {isEditing ? (
        <EditForm
          currentTodo={currentTodo}
          setIsEditing={setIsEditing}
          handleEditInputChange={handleEditInputChange}
          handleEditFormSubmit={handleEditFormSubmit}
        />
      ) : (
        <InputField handleSubmit={handleSubmit} />
      )}
      {!loading && (
        <TodoList
          todos={todos}
          deleteHandler={deleteHandler}
          handleEditClick={handleEditClick}
        />
      )}
      <SearchTodo searchTodos={searchTodos} handleSearch={handleSearch} />
      <Footer />
    </div>
  );
}

export default App;
