import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              Redux Toolkit Todo App
            </h1>
            <p className="text-gray-300 text-lg">
              A modern todo app built with React and Redux Toolkit
            </p>
          </div>
          <AddTodo />
          <Todos />
        </div>
      </div>
    </div>
  );
}

export default App;
