import React from 'react'

function TodoForm({ todo, editId, onSubmit, onChange }) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-semibold text-gray-900 mb-5">My Todo App</h1>
      <div className="w-full flex items-center space-x-2">
        <input
          type="text"
          value={todo}
          onChange={onChange}
          placeholder="Add a new todo"
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button 
          onClick={onSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          {editId !== null ? 'Update Todo' : 'Add Todo'}
        </button>
      </div>
    </div>
  )
}

export default TodoForm