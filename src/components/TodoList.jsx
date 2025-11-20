import TodoCard from "./TodoCard";

export default function TodoList({ todos, selectedTab, handleDeleteTodo, handleCompleteTodo }) {
  const filteredToDoList =
    selectedTab === "All"
      ? todos
      : selectedTab === "Completed"
      ? todos.filter((item) => item.complete)
      : todos.filter((item) => !item.complete);

  return (
    <>
      {filteredToDoList.map((todo, todoIndex) => {
        return <TodoCard key={todoIndex} todoIndex={todos.findIndex(val => (val === todo.index))} todo={todo} handleDeleteTodo={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo} />;
      })}
    </>
  );
}
