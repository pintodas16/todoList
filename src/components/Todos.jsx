import useTodoStore from "../state";
import Todo from "./Todo";
function Todos() {
  const todos = useTodoStore((state) => state.todos);
  console.log(todos);
  return (
    <div>
      {/* for filter and search  */}
      <div></div>
      <div>
        {todos.map((todo) => (
          <Todo key={todo?.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}
export default Todos;
