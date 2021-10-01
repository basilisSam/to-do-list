import "./App.css";
import InputField from "./components/InputField";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
function App() {
  return (
    <div className='App'>
      <h1 className='font-sans text-5xl'>THINGS TO DO</h1>
      <InputField />
      <Footer />
      <TodoList />
    </div>
  );
}

export default App;
