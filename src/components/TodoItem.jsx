import { useTodos } from "../hooks/useTodos"

const TodoItem = ({ text }) => {
    const { completeTodo, deleteTodo, todosFiltered } = useTodos()
    const isTodoCompleted = todosFiltered.some(todo => todo.text === text && todo.completed === true)
    return (
        <li className="text-justify flex justify-between items-center h-12 px-5 border-b last:border-none">
            <div className="flex">
                <button type="button" onClick={() => completeTodo(text)}>
                    <svg className={`${isTodoCompleted ? 'line-through text-gray-400' : 'text-green-700'} mx-4 w-6 h-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="sr-only">Complete task</span>
                </button>
                <p className={`${isTodoCompleted && 'line-through text-gray-400'} mx-4`}>{text}</p>

            </div>
            <button type="button" onClick={() => deleteTodo(text)}>
                <svg className="w-6 h-6 text-orange-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="sr-only">Delete task</span>
            </button>

        </li >
    )
}

export { TodoItem }