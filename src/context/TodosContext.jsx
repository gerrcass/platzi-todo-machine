import { createContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const TodosContext = createContext()


const TodosProvider = ({ children }) => {

    const { item: todos, setItem: setTodos, loading, error } = useLocalStorage()

    const [searchInput, setSearchInput] = useState('')


    let todosFiltered = []
    if (searchInput.length === 0) {
        todosFiltered = todos
    } else {
        todosFiltered = todos.filter(todo => todo.text.toLowerCase().includes(searchInput.toLowerCase()))
    }



    const count = todos.length

    const completedTodos = todos.filter(todo => todo.completed === true).length

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

    return (
        <TodosContext.Provider value={{ loading, error, todosFiltered, count, completedTodos, searchInput, setSearchInput, completeTodo, deleteTodo }}>
            {children}
        </TodosContext.Provider>
    )
}

export { TodosProvider, TodosContext }



