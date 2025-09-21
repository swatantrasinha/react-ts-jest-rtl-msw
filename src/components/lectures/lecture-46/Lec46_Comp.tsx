import { useEffect, useState } from "react";

type TodoType= {
  id: number,
  todo: string,
  completed: boolean,
  userId: string,
}
const Lec46_Comp = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((res) => setTodos(res.todos));
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          
        </a>
        <a href="https://react.dev" target="_blank">
          
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {todos.length && <div>Todo List : {todos.length}</div>}
      </div>

      <div> 
              {todos && (
              <ul>
                {todos?.map((user: TodoType) => (
                  <li key={user?.id}>{user?.todo}</li>
                ))}
              </ul>
            )}
      </div>
    </>
  );
}
// "msw": "^2.0.11",

export default Lec46_Comp;;
