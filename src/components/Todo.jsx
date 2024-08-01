import useTodoStore from "../state";

function Todo({ todo, onSetEdit, onSetEditedTodo }) {
  const changeTodoStatus = useTodoStore((state) => state.changeTodoStatus);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  // console.log(todo);
  const handleStatus = (id) => {
    changeTodoStatus(id);
  };
  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const handleEdit = (todo) => {
    onSetEditedTodo(todo);
    onSetEdit(true);
  };
  return (
    <div className="flex justify-between items-center px-4 py-2 rounded-lg bg-gray-300">
      <div className="flex gap-2 items-center cursor-pointer">
        <input
          onChange={() => handleStatus(todo?.id)}
          id={todo?.id}
          type="checkbox"
          name="todo-check"
        />
        <label
          className={`font-serif font-medium text-lg capitalize cursor-pointer ${
            todo.status ? "line-through" : ""
          }`}
          htmlFor={todo.id}
        >
          {todo?.title}
        </label>
      </div>
      <div className="flex gap-2.5">
        <div
          onClick={() => handleEdit(todo)}
          className="py-1 px-2 border border-grey-200 rounded-lg cursor-pointer"
        >
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
