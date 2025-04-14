import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [editId, setEditId] = useState(null)

  const handleAddTodo = () => {
    if (todo.trim()) {
      if (editId !== null) {
        setTodos(todos.map(item => 
          item.id === editId ? { ...item, text: todo } : item
        ))
        setEditId(null)
      } else {
        setTodos([...todos, { id: Date.now(), text: todo }])
      }
      setTodo('')
    } else {
      alert('Please enter a todo')
    }
  }

  const handleDelete = (id) => {
    setTodos(todos.filter(item => item.id !== id))
  }

  const handleEdit = (id) => {
    const todoToEdit = todos.find(item => item.id === id)
    setTodo(todoToEdit.text)
    setEditId(id)
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <TodoForm 
              todo={todo}
              editId={editId}
              onSubmit={handleAddTodo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <TodoList 
              todos={todos}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
