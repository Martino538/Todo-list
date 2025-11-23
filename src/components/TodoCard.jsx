export default function TodoCard({
  todo,
  todoId,
  handleDeleteTodo,
  handleCompleteTodo,
}) {
  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button
          onClick={() => handleCompleteTodo(todoId)}
          disabled={todo.complete}
        >
          <h6>Done</h6>
        </button>
        <button onClick={() => handleDeleteTodo(todoId)}>
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
}
