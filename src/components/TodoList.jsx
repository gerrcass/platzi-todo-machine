
const TodoList = ({ children }) => {
    return (
        <section className="w-max ">
            <ul className="flex flex-col space-y-2">
                {children}
            </ul>
        </section>

    )
}

export { TodoList }