import { useEffect, useState } from "react"

const initialState = [
    { text: "Cut onions", completed: false },
    { text: "Take the Reacts intro course", completed: false },
    { text: "Cry with the weeping woman", completed: true }
];

const localStorageKey = 'TODO_MACHINE_APP'

const useLocalStorage = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [item, setItem] = useState(initialState)
    
    const [synchronizedItem, setSynchronizedItem] = useState(true)
    useEffect(() => {
        //setTimeout for testing loading state 👉 <ErrorState />
        setTimeout(() => {
            try {
                const todosLocalStorage = localStorage.getItem(localStorageKey)
                todosLocalStorage ? saveItems(JSON.parse(todosLocalStorage)) : saveItems(initialState)
            } catch (error) {
                console.log(error)
                setError(true)
            }
            setLoading(false)
            setSynchronizedItem(true)
        }, 500)
    }, [synchronizedItem])

    const saveItems = (item) => {
        setItem(item)
        localStorage.setItem(localStorageKey, JSON.stringify(item))
      }
    
    const syncItem = () => {
        setLoading(true)
        setSynchronizedItem(false) //👈 this triggers useEffect because of its dependencies [sincronizedItem]
    }

    return { item, loading, error, saveItems,syncItem }
}

export { useLocalStorage, localStorageKey }