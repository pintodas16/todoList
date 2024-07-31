import { useState } from "react";
function CreateTodo() {
  const [createTodo, setCreateTodo] = useState("");
  const handleChange = (e) => {
    setCreateTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between items-center border border-gray-400 rounded-md p-1 ">
        <input
          id="todo-input"
          className="focus:outline-none px-2 py-1.5 bg-transparent"
          type="text"
          placeholder="Enter you todo...."
          onChange={handleChange}
          value={createTodo}
        />
        <button
          type="submit"
          className="bg-sky-600 py-1.5 px-3 rounded-md font-serif font-medium text-xl text-white hover:bg-sky-400"
        >
          Create
        </button>
      </div>
    </form>
  );
}
export default CreateTodo;
