import { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const useTodos = () => {
    const { item: todos, setItem: setTodos, syncItem: synchronizeTodos,loading, error } = useLocalStorage()
    const [searchInput, setSearchInput] = useState('')
    const [openModal, setOpenModal] = useState(false)

    let todosFiltered = []
    if (searchInput.length === 0) {
        todosFiltered = todos
    } else {
        todosFiltered = todos.filter(todo => todo.text.toLowerCase().includes(searchInput.toLowerCase()))
    }

    const count = todos.length

    const completedTodos = todos.filter(todo => todo.completed === true).length

    const addTodo = (text) => {
        const todoAlreadyExist = todos.some(todo => todo.text.toLowerCase().trim() === text.toLowerCase().trim())
        if (todoAlreadyExist) {
            return 'Item already exists.'
        } else {
            setTodos([...todos, { text: text.trim(), completed: false }])
        }
    }

    const completeTodo = (text) => {
        const newTodos = todos.map(todo => {
            return todo.text === text ? { ...todo, completed: !todo.completed } : todo

        })
        setTodos(newTodos)

    }
    const deleteTodo = (text) => {
        const newTodos = todos.filter(todo => todo.text !== text)
        setTodos(newTodos)
    }

    return { loading, error, openModal, setOpenModal, todosFiltered, synchronizeTodos,count, completedTodos, searchInput, setSearchInput, addTodo, completeTodo, deleteTodo }
}

export { useTodos }



