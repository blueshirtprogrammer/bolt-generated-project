import React, { useState } from 'react';
    import TodoList from './components/TodoList';
    import AddTodo from './components/AddTodo';

    const App = () => {
      const [todos, setTodos] = useState([]);

      const addTodo = (text) => {
        setTodos([...todos, { id: Date.now(), text, completed: false }]);
      };

      const toggleTodo = (id) => {
        setTodos(todos.map(todo => 
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
      };

      const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
      };

      return (
        &lt;div className="min-h-screen bg-gray-100 flex items-center justify-center">
          &lt;div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            &lt;h1 className="text-2xl font-bold mb-4">Todo App&lt;/h1>
            &lt;AddTodo addTodo={addTodo} />
            &lt;TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
          &lt;/div>
        &lt;/div>
      );
    };

    export default App;
