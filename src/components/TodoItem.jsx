
const TodoItem = ({ text }) => {
    return (
        <li className="text-justify flex justify-between items-center h-12 px-5 border-b last:border-none">
            <div className="flex">
                <svg className="w-6 h-6 text-green-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <p className="mx-4">{text}</p>
            </div>
            <svg className="w-6 h-6 text-orange-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

        </li >
    )
}

export { TodoItem }