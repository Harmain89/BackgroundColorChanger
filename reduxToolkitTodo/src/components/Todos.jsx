import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";


const Todos = () => {

    // const todos = useSelector((state) => state.todos);

    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
  
    useEffect(() => {
      const old_todos = JSON.parse(localStorage.getItem('todos'))
  
      if(old_todos && old_todos.length > 0) {
        //
        localStorage.setItem('todos', JSON.stringify(old_todos))
      }
  
    }, []);
  
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);


    return (
        <>
            <h1 className="text-3xl font-bold text-gray-800 my-10">Todos</h1>
            <ul className="space-y-4">
                {
                    todos.map((todo) => (
                        <li key={todo.id} className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
                            <span className="text-white">{todo.text}</span>
                            <button
                                onClick={() => { dispatch(removeTodo(todo.id)) }}
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
                            >
                                Delete
                            </button>
                        </li>
                    ))
                }
            </ul>
        </>
    );
}

export default Todos