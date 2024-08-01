import useTodoStore from "../state";
import Todo from "./Todo";
function Todos({ todos, onSetEdit, onSetEditedTodo }) {
  console.log(todos);
  return (
    <div>
      {/* for filter and search  */}
      <div></div>
      <div className="flex flex-col gap-3">
        {todos.map((todo) => (
          <Todo
            onSetEditedTodo={onSetEditedTodo}
            onSetEdit={onSetEdit}
            key={todo?.id}
            todo={todo}
          />
        ))}
      </div>
    </div>
  );
}
export default Todos;
