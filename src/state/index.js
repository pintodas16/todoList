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
  updateTodo: (userTodo) => {
    console.log(userTodo);
    const todos = get().todos;
    // console.log("todos", todos);
    // console.log("userTodo", userTodo);
    const updatedTodos = todos.map((todo) => {
      if (todo.id === userTodo.id) {
        console.log("match", userTodo);
        return { ...todo, title: userTodo.title };
      }
      return todo;
    });
    console.log("updatedTodo", updatedTodos);
    set((state) => ({
      todos: updatedTodos,
    }));
  },
});

const useTodoStore = create(todoStore);
export default useTodoStore;
