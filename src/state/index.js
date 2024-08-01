import { create } from "zustand";
const todoStore = (set, get) => ({
  todos: [],
  addTodo: (todo) => {
    // const todos = get.todos
    set((state) => ({
      ...state,
      todos: [...state.todos, { ...todo }],
    }));
  },
  changeTodoStatus: (todoId) => {
    const todos = get().todos;
    const updatedTodos = todos.map((todo) => {
      if (todo?.id === todoId) {
        return { ...todo, status: !todo.status };
      }
      return todo;
    });
    // console.log(todoId, updatedTodos);
    set((state) => ({
      todos: updatedTodos,
    }));
  },
  deleteTodo: (todoId) => {
    const todos = get().todos;
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    set((state) => ({
      todos: newTodos,
    }));
  },
});

const useTodoStore = create(todoStore);
export default useTodoStore;
