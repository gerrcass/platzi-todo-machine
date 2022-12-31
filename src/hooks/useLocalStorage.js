import { useEffect, useState } from "react"

const initialState = [
    { text: "Cut onions", completed: false },
    { text: "Take the Reacts intro course", completed: false },
    { text: "Cry with the weeping woman", completed: true }
];

const localStorageKey = 'TODO_MACHINE_APP'

const useLocalStorage = () => {
    const [item, setItem] = useState(initialState)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [synchronizedItem, setSynchronizedItem] = useState(true)

    const syncItem = () => {
        setLoading(true)
        setSynchronizedItem(false) //👈 this triggers useEffect because of its dependencies [sincronizedItem]
    }
    useEffect(() => {
        //setTimeout for testing loading state 👉 <ErrorState />
        console.log('ME EJECUTE')
        setTimeout(() => {
            try {
                const todosLocalStorage = localStorage.getItem(localStorageKey)
                todosLocalStorage ? setItem(JSON.parse(todosLocalStorage)) : setItem(initialState)
            } catch (error) {
                console.log(error)
                setError(true)
            }
            setLoading(false)
            setSynchronizedItem(true)
        }, 500)
    }, [synchronizedItem])

    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(item))
    }, [item])

    return { item, setItem, loading, error, syncItem }
}

export { useLocalStorage, localStorageKey }