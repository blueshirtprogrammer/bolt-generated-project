import React, { useState } from 'react';

    const AddTodo = ({ addTodo }) => {
      const [text, setText] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
          addTodo(text);
          setText('');
        }
      };

      return (
        &lt;form onSubmit={handleSubmit} className="flex">
          &lt;input 
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            className="flex-grow border border-gray-300 p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Add a new todo" 
          />
          &lt;button 
            type="submit" 
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add
          &lt;/button>
        &lt;/form>
      );
    };

    export default AddTodo;
