import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ todos, onEdit, onDelete }) {
  return (
    <ul className="space-y-3 mt-6">
      {todos.map((item) => (
        <TodoItem 
          key={item.id}
          item={item}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default TodoList