import { useState } from 'react'

function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [editId, setEditId] = useState(null)

  const handleAddTodo = () => {
    if (todo.trim()) {
      if (editId !== null) {
        // Update existing todo
        setTodos(todos.map(item => 
          item.id === editId ? { ...item, text: todo } : item
        ))
      setEditId(null)
      } else {
        // Add new todo
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
            <div className="flex flex-col items-center">
              <h1 className="text-2xl font-semibold text-gray-900 mb-5">My Todo App</h1>
              <div className="w-full flex items-center space-x-2">
                <input
                  type="text"
                  value={todo}
                  onChange={(e) => setTodo(e.target.value)}
                  placeholder="Add a new todo"
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
                <button 
                  onClick={handleAddTodo}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                >
                  {editId !== null ? 'Update Todo' : 'Add Todo'}
                </button>
              </div>
            </div>
            
            <ul className="space-y-3 mt-6">
              {todos.map((item) => (
                <li 
                  key={item.id}
                  className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg"
                >
                  <span className="text-gray-700">{item.text}</span>
                  <div className="space-x-2">
                    <button 
                      onClick={() => handleEdit(item.id)}
                      className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(item.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
