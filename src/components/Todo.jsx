function Todo() {
  return (
    <div className="flex gap-2 items-center">
      <input id="todo-check" type="checkbox" />
      <label
        className="font-serif font-medium text-lg capitalize"
        htmlFor="todo-check"
      >
        Todo title
      </label>
    </div>
  );
}
export default Todo;
