import { useEffect, useState } from "react";
import "./App.css";
import EditForm from "./components/EditForm";
import Footer from "./components/Footer";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import SearchTodo from "./components/SearchTodo";

function App() {
  const [todos, setTodos] = useState(null);
  const [todoToBeEdited, setTodoToBeEdited] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTodos, setSearchTodos] = useState(null);
  const BASE_URL = "http://localhost:8000/todos/";

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((todos) => {
        setTodos(todos);
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
    fetch(`${BASE_URL}${id}`, {
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
    fetch(BASE_URL, {
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

  const handleEditInputChange = (e) => {
    setTodoToBeEdited({ ...todoToBeEdited, title: e.target.value });
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    updateTodo(todoToBeEdited.id, todoToBeEdited);
  };

  const updateTodo = (id, updatedTodo) => {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  };
  const handleEditClick = (id) => {
    setIsEditing(true);
    setTodoToBeEdited(
      todos.find((todos) => {
        return todos.id === id;
      })
    );
  };

  const isEmpty = (title) => {
    return title === "";
  };

  const handleSearch = (title) => {
    if (!isEmpty(title)) {
      setSearchTodos(
        todos.filter((todos) => {
          return todos.title.includes(title);
        })
      );
    } else {
      setSearchTodos(null);
    }
  };

  return (
    <div className='App'>
      <h1 className='font-sans text-5xl'>THINGS TO DO</h1>
      {isEditing ? (
        <EditForm
          todoToBeEdited={todoToBeEdited}
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
