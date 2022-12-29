import { useTodos } from "../hooks/useTodos"

const TodoCounter = () => {
    const { completedTodos, count } = useTodos()
    return (
        <h2 className="text-2xl mb-5 leading-none drop-shadow font-medium">Things to do<br />
            <span
                className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded-full"
            >
                {`${(completedTodos / count * 100).toFixed(1)}% done`}
            </span>
        </h2>
    )
}

export { TodoCounter }