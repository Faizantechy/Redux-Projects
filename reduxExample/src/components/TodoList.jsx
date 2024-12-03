import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask } from "../reducers/TodoReducer";

const TodoList = () => {
  const [inputVal, setinputVal] = useState([]);
  const dispatch = useDispatch();

  const { todos } = useSelector((state) => state.todos);

  const addingTaskClick = () => {
    dispatch(addTask(inputVal));
  };

  const removeItem = (index) => {
    dispatch(removeTask(index));
  };

  return (
    <div className="w-full h-full  text-white px-4 py-5 mt-10">
      <center>
        <h1 className="text-4xl font-bold">
          Plan Your Day By Noting Your Tasks
        </h1>

        <div className="todoList w-full h-full mt-10">
          <input
            type="text"
            placeholder="Enter Your Task.."
            className="w-[300px] px-2 py-2"
            value={inputVal}
            onChange={(e) => setinputVal(e.target.value)}
          />
          <button
            className="px-3 py-1 rounded-lg bg-blue-400 text-white ml-2 cursor-pointer active:scale-90"
            onClick={addingTaskClick}
          >
            Add Task:
          </button>

          <ul className="mt-10  mr-[150px] space-y-3 text-xl flex flex-col justify-center items-center">
            {todos.map((item, index) => {
              return (
                <li className="flex gap-10 ">
                  {item}{" "}
                  <span
                    className="text-xl font-bold text-red-700 cursor-pointer"
                    onClick={() => removeItem(index)}
                  >
                    X
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </center>
    </div>
  );
};

export default TodoList;
