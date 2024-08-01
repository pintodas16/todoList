import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col gap-5 justify-center items-center">
        <h1 className="font-serif font-bold text-3xl text-center">Todo List</h1>
        <div className="px-4 py-2 rounded-lg bg-gray-300 border min-w-[500px] border-gray-200 shadow-md">
          <CreateTodo />
        </div>
        <div className=" min-w-[500px]">
          <Todos />
        </div>
      </div>
    </>
  );
}

export default App;
