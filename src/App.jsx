import { useEffect, useState, useRef } from "react";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";
import useTodoStore from "./state";
function App() {
  const todos = useTodoStore((state) => state.todos);

  const [isEdit, setIsEdit] = useState(false);
  const [editedTodo, setEditedTodo] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  // console.log("edited", editedTodo);
  const inputRef = useRef();
  useEffect(() => {
    showSearch ? inputRef.current.focus() : null;
  }, [showSearch]);

  const updateTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="w-screen h-screen flex flex-col gap-5 justify-center items-center">
        <h1 className="font-serif font-bold text-3xl text-center">Todo List</h1>
        <div className="px-4 py-2 rounded-lg bg-gray-300 border min-w-[500px] border-gray-200 shadow-md">
          <CreateTodo
            editedTodo={editedTodo}
            isEdit={isEdit}
            onSetIsEdit={setIsEdit}
            onSetEditedTodo={setEditedTodo}
          />
        </div>
        <div className=" min-w-[500px] py-1.5 px-2 rounded-lg bg-gray-300">
          <div className="flex justify-between items-center">
            <div className="px-4 py-2 bg-white flex gap-1 items-center cursor-pointer rounded-md border">
              <i className="fa-solid fa-filter text-gray-700"></i>
              <p>Filter</p>
            </div>
            <div>
              <form action="">
                <div
                  className={`w-full flex items-center rounded-md border ${
                    showSearch ? "border-blue-500" : "border-transparent"
                  } transition-all duration-700`}
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`transition-all duration-700 ${
                      showSearch
                        ? "translate-x-0 w-[200px] focus:outline-none"
                        : "-translate-x-full w-0"
                    } bg-transparent py-2 px-2 focus:outline-none`}
                    style={{ transitionProperty: "width,translate" }}
                  />
                  <div
                    onClick={() => setShowSearch(!showSearch)}
                    className="px-5 cursor-pointer bg-blue-500 hover:bg-blue-400 py-1.5  rounded-md"
                  >
                    <i className="fa-solid fa-magnifying-glass text-white "></i>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className=" min-w-[500px]">
          <Todos
            todos={updateTodos}
            onSetEditedTodo={setEditedTodo}
            onSetEdit={setIsEdit}
          />
        </div>
      </div>
    </>
  );
}

export default App;
