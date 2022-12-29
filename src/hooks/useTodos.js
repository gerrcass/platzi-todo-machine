import { useContext } from 'react'
import { TodosContext } from '../context/TodosContext'

const useTodos = () => {
    const context = useContext(TodosContext)

    if (context === undefined) {
        throw new Error("useTodos must be used within TodosContext")
    }
    return context
}

export {useTodos}