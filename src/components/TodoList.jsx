import { AnimatePresence } from "framer-motion"
const TodoList = ({ children }) => {
    return (
        <section className="w-full my-5">
            <ul className="flex flex-col rounded-xl bg-white shadow-2xl text-gray-700">
                <AnimatePresence>
                    {children}
                </AnimatePresence>
            </ul>
        </section>

    )
}

export { TodoList }