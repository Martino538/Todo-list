import { useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  // const todos = [
  //   { input: "Hello! Add your first todo!", complete: true },
  //   { input: "Get the groceries!", complete: false },
  //   { input: "Learn how to web design", complete: false },
  //   { input: "Say hi to gran gran", complete: true },
  // ];

  const [todos, setTodos] = useState([
    { input: "Hello! Add your first todo!", complete: true },
  ]);

  const [selectedTab, setSelectedTab] = useState('Open');

  function handleAddTodo(newTodo) {
    const newTodoItem = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoItem);
  }

  function handleCompleteTodo(idTodoItem) {
    let newTodoList = []
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((todoItem, todoItemIndex) => {
      return (
        todoItemIndex !== index
      )
    })
    setTodos(newTodoList);
  }

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <TodoList todos={todos} selectedTab={selectedTab} handleDeleteTodo={handleDeleteTodo}/>
      <TodoInput todos={todos} handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
