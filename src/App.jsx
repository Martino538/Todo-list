import { useEffect, useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: crypto.randomUUID(),
      input: "Hello! Add your first todo!",
      complete: true,
    },
  ]);

  const [selectedTab, setSelectedTab] = useState("Open");

  function handleAddTodo(newTodo) {
    const newTodoList = [
      ...todos,
      { id: crypto.randomUUID(), input: newTodo, complete: false },
    ];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleCompleteTodo(id) {
    const newTodoList = todos.map((todo) =>
      todo.id === id ? { ...todo, complete: true } : todo
    );
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleDeleteTodo(id) {
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleSaveData(currentTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currentTodos }));
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) {
      return;
    }
    const db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos);
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs
        todos={todos}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <TodoList
        todos={todos}
        selectedTab={selectedTab}
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
      <TodoInput todos={todos} handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
