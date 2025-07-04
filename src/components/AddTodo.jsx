import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div className="mb-8">
      <form onSubmit={addTodoHandler} className="flex gap-3">
        <input
          type="text"
          className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/50 text-base outline-none text-white py-3 px-4 placeholder-gray-400 transition-all duration-200"
          placeholder="Enter a new todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400/50">
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
