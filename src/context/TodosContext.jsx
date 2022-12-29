import { createContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const TodosContext = createContext()


const TodosProvider = ({ children }) => {

    const { item: todos, setItem: setTodos, loading, error } = useLocalStorage()
    //const [todos, setTodos] = useState(initialState)

    //const [todosFiltered, setTodosFiltered] = useState(initialState)
    const [searchInput, setSearchInput] = useState('')


    let todosFiltered = []
    if (searchInput.length === 0) {
        todosFiltered = todos
    } else {
        todosFiltered = todos.filter(todo => todo.text.toLowerCase().includes(searchInput.toLowerCase()))

    }



    const count = todos.length

    const completedTodos = todos.filter(todo => todo.completed === true).length

    const setSearchTodo = (searchInput) => {
        const newTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchInput.toLowerCase()))
        setTodosFiltered(newTodos)
    }

    const completeTodo = (text) => {
        const newTodos = todos.filter(todo => {
            if (todo.text === text) return { ...todo, completed: !todo.completed }

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



