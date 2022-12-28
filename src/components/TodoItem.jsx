
const TodoItem = ({ text }) => {
    return (
        <li className="relative bg-gray-100">
            <span className="absolute top-1/2 transform -translate-y-1/2">✔</span>
            <p className="text-center px-10 py-3">{text}</p>
            <span className="absolute -top-2 -right-2">❌</span>
        </li>
    )
}

export { TodoItem }