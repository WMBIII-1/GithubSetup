import React from 'react'

function TodoItem({ item, onEdit, onDelete }) {
  return (
    <li className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg">
      <span className="text-gray-700">{item.text}</span>
      <div className="space-x-2">
        <button 
          onClick={() => onEdit(item.id)}
          className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none"
        >
          Edit
        </button>
        <button 
          onClick={() => onDelete(item.id)}
          className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem