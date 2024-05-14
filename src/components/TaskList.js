import React from "react";
import Todos from "./Todos";

const TaskList = ({ todos, setTodos, filteredTodos, key }) => {
  const todosToRender = Array.isArray(filteredTodos) ? filteredTodos : [];
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todosToRender.map((todo) => (
          <Todos
            setTodos={setTodos}
            todo={todo}
            todos={todos}
            text={todo.text}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
