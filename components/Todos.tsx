"use client"
import React, { useState, useEffect } from "react";
import Loader from "./Loading";

interface Todo {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
  }
  

const Todo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("/api/todos");
        const todo = await data.json();
        setTodos(todo.todos);
        setLoading(false);

      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  
  return (
    <div>
     
      {loading ? (
        <Loader />
      ) : (
        todos.map((item) => (
          <h3 className="text-2xl text-600" key={item.id}>
            {item.todo}
          </h3>
        ))
      )}
    </div>
  );
};

export default Todo;










