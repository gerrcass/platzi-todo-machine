
const TodoList = ({ children }) => {
    return (
        <section className="w-full mt-5 mb-8">
            <ul className="flex flex-col rounded-xl bg-white shadow-2xl text-gray-700">
                {children}
            </ul>
        </section>

    )
}

export { TodoList }