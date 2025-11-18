import TodoCard from "./TodoCard";

export default function TodoList({ todos, selectedTab, handleDeleteTodo }) {
  const filteredToDoList =
    selectedTab === "All"
      ? todos
      : selectedTab === "Completed"
      ? todos.filter((item) => item.complete)
      : todos.filter((item) => !item.complete);

  return (
    <>
      {filteredToDoList.map((todo, todoIndex) => {
        console.log(todoIndex)
        return <TodoCard key={todoIndex} todoIndex={todoIndex} todo={todo} handleDeleteTodo={handleDeleteTodo} />;
      })}
    </>
  );
}
