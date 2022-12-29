import { useState } from "react"
import { useTodos } from "../hooks/useTodos"

const TodoForm = () => {
    const { setOpenModal, addTodo } = useTodos()
    const [newTodoItem, setNewTodoItem] = useState('')
    const [error, setError] = useState('')

    const onCancel = () => setOpenModal(false)

    const handleTextAreaChange = (event) => {
        error && setError('')
        setNewTodoItem(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if (!newTodoItem) {
            setError('Write some to do')
            return
        }
        if (newTodoItem) {
            const response = addTodo(newTodoItem)
            if (response) return setError(response)
        }

        setOpenModal(false)
    }

    const onEnterPress = (e) => {
        if (e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();
            onSubmit(e)
        }
    }

    return (
        <form onSubmit={onSubmit} className='flex flex-col justify-center bg-white shadow-lg rounded-xl p-8  mb-4 w-96 h-64'>
            <label className="block text-gray-700 text-2xl font-bold mb-2">Write one thing to do</label>
            <textarea
                autoFocus
                onKeyDown={onEnterPress}
                className={`${error ? 'border border-red-500' : 'border-none'} h-20 resize-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                placeholder="Cut onions for lunch"
                value={newTodoItem}
                onChange={handleTextAreaChange}
            />
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
            <div className="mt-5">
                <button
                    className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    type="button"
                    onClick={onCancel}
                >Cancel
                </button>
                <button
                    className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    type="submit"
                    onClick={onSubmit}
                >Add To Do
                </button>
            </div>
        </form>
    )
}

export { TodoForm }