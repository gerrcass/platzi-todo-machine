//import { AnimatePresence } from "framer-motion"
const TodoList = (props) => {
    return (
        <section className="w-full my-5">
            <div className="rounded-xl bg-white shadow-2xl text-gray-700">
                {props.error && props.onError()}
                {props.loading && props.onLoading()}

                {!props.loading && !props.count && props.onEmptyTodos()}
                {!!props.count && !props.todosFiltered.length && props.onNoSearchResults(props.searchText)}

                <ul className="flex flex-col rounded-xl bg-white shadow-2xl text-gray-700">
                    {/* <AnimatePresence> */}
                    {!props.loading && !props.error && props.todosFiltered.map(props.render || props.children)}
                    {/* </AnimatePresence> */}
                </ul>

            </div>
        </section>

    )
}

export { TodoList }