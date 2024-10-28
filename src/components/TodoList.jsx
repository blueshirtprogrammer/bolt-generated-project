import React from 'react';
    import TodoItem from './TodoItem';

    const TodoList = ({ todos, toggleTodo, removeTodo }) => {
      return (
        &lt;ul className="mt-4">
          {todos.map(todo => (
            &lt;TodoItem 
              key={todo.id} 
              todo={todo} 
              toggleTodo={toggleTodo} 
              removeTodo={removeTodo} 
            />
          ))}
        &lt;/ul>
      );
    };

    export default TodoList;
