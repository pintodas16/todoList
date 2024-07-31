import useTodoStore from "../state";

function Todo({ todo }) {
  const changeTodoStatus = useTodoStore((state) => state.changeTodoStatus);
  console.log(todo);
  const handleStatus = (id) => {
    changeTodoStatus(id);
  };
  return (
    <div className="flex gap-2 items-center">
      <input
        onChange={() => handleStatus(todo.id)}
        id={todo.id}
        type="checkbox"
        name="todo-check"
      />
      <label
        className={`font-serif font-medium text-lg capitalize ${
          todo.status ? "line-through" : ""
        }`}
        htmlFor={todo.id}
      >
        {todo?.title}
      </label>
    </div>
  );
}
export default Todo;
