import { useEffect, useState } from "react"

const initialState = [
    { text: "Cut onions", completed: false },
    { text: "Take the React's intro course", completed: false },
    { text: "Cry with the weeping woman", completed: true }
];

const localStorageKey = 'TODO_MACHINE_APP'
const todosLocalStorage = localStorage.getItem(localStorageKey)

const useLocalStorage = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        try {
            //throw new Error('Testing <ErrorState /> component')
            todosLocalStorage ? setItem(JSON.parse(todosLocalStorage)) : setItem(initialState)

        } catch (error) {
            console.log(error)
            setError(true)
        }
        setLoading(false) //set 'true' for testing <LoadingState />
    }, [])

    const removeLocalStorage = () => {
        localStorage.removeItem(localStorageKey)
    }
    const updateLocalStorage = (todos) => {
        localStorage.setItem(localStorageKey, JSON.stringify(todos))
    }

    return { item, setItem, loading, error, removeLocalStorage, updateLocalStorage }
}

export { useLocalStorage }