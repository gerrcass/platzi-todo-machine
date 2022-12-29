import { useEffect, useState } from "react"

const initialState = [
    { text: "Cut onions", completed: false },
    { text: "Take the React's introcourse", completed: false },
    { text: "Cry with the weeping woman", completed: true }
];

const useLocalStorage = () => {
    const [item, setItem] = useState(initialState)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        try {
            if (localStorage.getItem('TODO_MACHINE_APP')) {

            } else {
                localStorage.setItem('TODO_MACHINE_APP', JSON.stringify([]))
            }

        } catch (error) {
            console.log(error)
            setError(true)
        }

        setLoading(false)
    }, [])


    return { item, setItem, loading, error }
}

export { useLocalStorage }