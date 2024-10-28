import React from 'react';

    const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
      return (
        &lt;li className="flex items-center justify-between py-2 border-b border-gray-200">
          &lt;div className="flex items-center">
            &lt;input 
              type="checkbox" 
              checked={todo.completed} 
              onChange={() => toggleTodo(todo.id)} 
              className="mr-2" 
            />
            &lt;span className={todo.completed ? 'line-through text-gray-400' : ''}>
              {todo.text}
            &lt;/span>
          &lt;/div>
          &lt;button 
            onClick={() => removeTodo(todo.id)} 
            className="text-red-500 hover:text-red-700"
          >
            Remove
          &lt;/button>
        &lt;/li>
      );
    };

    export default TodoItem;
