"use client"

import { useState, useEffect } from "react"
import { Pencil, Trash2, Plus, CheckCircle2, Circle } from "lucide-react"
import { v4 as uuidv4 } from "uuid"

const TodoList = () => {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setShowFinished] = useState(true)
  const [editingId, setEditingId] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load todos from localStorage on component mount
  useEffect(() => {
    try {
      const storedTodos = localStorage.getItem("todos")
      if (storedTodos) {
        const parsedTodos = JSON.parse(storedTodos)
        if (Array.isArray(parsedTodos)) {
          setTodos(parsedTodos)
        }
      }
      // Set a flag to indicate data has been loaded
      setIsLoaded(true)
    } catch (error) {
      console.error("Error loading todos from localStorage:", error)
      setIsLoaded(true)
    }
  }, [])

  // Save todos to localStorage whenever todos state changes
  // But only after initial load is complete
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem("todos", JSON.stringify(todos))
        console.log("Saved todos to localStorage:", todos)
      } catch (error) {
        console.error("Error saving todos to localStorage:", error)
      }
    }
  }, [todos, isLoaded])

  const toggleFinished = () => {
    setShowFinished(!showFinished)
  }

  const handleEdit = (id) => {
    const todoToEdit = todos.find((item) => item.id === id)
    if (todoToEdit) {
      setTodo(todoToEdit.todo)
      setEditingId(id)
    }
  }

  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id))
  }

  const handleAdd = () => {
    if (todo.trim().length <= 2) return

    if (editingId) {
      // Edit existing todo
      setTodos(todos.map((item) => (item.id === editingId ? { ...item, todo: todo } : item)))
      setEditingId(null)
    } else {
      // Add new todo
      setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    }

    setTodo("")
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (id) => {
    setTodos(todos.map((item) => (item.id === id ? { ...item, isCompleted: !item.isCompleted } : item)))
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd()
    }
  }

  return (
    <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] md:w-[35%] shadow-lg animate-fadeIn">
      <h1 className="font-bold text-center text-2xl text-violet-900 mb-6">iTask - Manage your todos at one place</h1>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6 transition-all duration-300 hover:shadow-lg">
        <h2 className="text-xl font-bold text-violet-800 mb-3">{editingId ? "Edit Todo" : "Add a Todo"}</h2>
        <div className="flex">
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            placeholder="Enter your task..."
            className="w-full rounded-l-full px-5 py-2 bg-violet-50 border border-violet-200 focus:outline-none focus:ring-2 focus:ring-violet-300"
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={handleAdd}
            disabled={todo.trim().length <= 2}
            className="bg-gradient-to-r from-violet-700 to-purple-700 rounded-r-full hover:from-violet-800 hover:to-purple-800 disabled:opacity-50 p-4 py-2 text-sm font-bold text-white transition-all duration-300 flex items-center"
          >
            {editingId ? <Pencil size={16} /> : <Plus size={16} />}
            <span className="ml-1">{editingId ? "Update" : "Add"}</span>
          </button>
        </div>
      </div>

      <div className="flex items-center mb-4">
        <input
          id="show"
          onChange={toggleFinished}
          type="checkbox"
          checked={showFinished}
          className="h-4 w-4 text-violet-600 focus:ring-violet-500 rounded"
        />
        <label className="ml-2 text-gray-700" htmlFor="show">
          Show Completed Tasks
        </label>
      </div>

      <div className="h-[1px] bg-violet-300 w-[100%] mx-auto my-4"></div>

      <h2 className="text-xl font-bold text-violet-800 mb-4">Your Tasks ({todos.length})</h2>

      <div className="todos space-y-3">
        {todos.length === 0 && (
          <div className="m-5 text-gray-500 text-center italic">
            No tasks to display. Add a new task to get started!
          </div>
        )}

        {todos
          .filter((item) => showFinished || !item.isCompleted)
          .map((item) => (
            <div
              key={item.id}
              className={`todo flex justify-between items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 ${item.isCompleted ? "border-l-4 border-green-500" : "border-l-4 border-violet-500"}`}
            >
              <div className="flex items-center gap-3">
                <button onClick={() => handleCheckbox(item.id)} className="focus:outline-none">
                  {item.isCompleted ? (
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                  ) : (
                    <Circle className="h-6 w-6 text-violet-600" />
                  )}
                </button>
                <div
                  className={`${item.isCompleted ? "line-through text-gray-500" : "text-gray-800"} transition-all duration-200`}
                >
                  {item.todo}
                </div>
              </div>

              <div className="buttons flex gap-2">
                <button
                  onClick={() => handleEdit(item.id)}
                  className="bg-violet-600 hover:bg-violet-700 p-2 rounded-md text-white transition-colors duration-200"
                  title="Edit task"
                >
                  <Pencil size={16} />
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 hover:bg-red-600 p-2 rounded-md text-white transition-colors duration-200"
                  title="Delete task"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default TodoList
