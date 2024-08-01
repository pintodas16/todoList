import useTodoStore from "../state";

function Todo({ todo }) {
  const changeTodoStatus = useTodoStore((state) => state.changeTodoStatus);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  console.log(todo);
  const handleStatus = (id) => {
    changeTodoStatus(id);
  };
  const handleDelete = (id) => {
    deleteTodo(id);
  };
  return (
    <div className="flex justify-between items-center px-4 py-2 rounded-lg bg-gray-300">
      <div className="flex gap-2 items-center">
        <input
          onChange={() => handleStatus(todo?.id)}
          id={todo?.id}
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
      <div className="flex gap-2.5">
        <div className="py-1 px-2 border border-grey-200 rounded-lg cursor-pointer">
          <i className="fa-solid fa-pen-to-square"></i>
        </div>
        <div
          onClick={() => handleDelete(todo?.id)}
          className="py-1 px-2 border border-grey-200 rounded-lg hover:bg-red-600 hover:text-white cursor-pointer"
        >
          <i className="fa-regular fa-trash-can"></i>
        </div>
      </div>
    </div>
  );
}
export default Todo;
