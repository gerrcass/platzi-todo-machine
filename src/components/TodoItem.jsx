import { motion } from "framer-motion"

const itemsVariants = {
    hidden: { opacity: 0 },
    visible: (custom) => ({
        opacity: 1,
        transition: { delay: custom }
    })
}

const TodoItem = ({ text, index, completeTodo, deleteTodo, todosFiltered }) => {

    const isTodoCompleted = todosFiltered.some(todo => todo.text === text && todo.completed === true)

    return (
        <motion.li
            key={index}
            variants={itemsVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            layoutId={index}
            custom={(index + 1) * 0.1}
            className="text-justify flex justify-between items-center h-12 px-5 border-b last:border-none">
            <div className="flex">
                <motion.button whileTap={{ scale: 1.2 }} type="button" onClick={() => completeTodo(text)}>
                    {isTodoCompleted ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        :
                        <svg className={`${isTodoCompleted ? 'line-through text-gray-400' : 'text-green-700'} w-6 h-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>}

                    <span className="sr-only">Complete task</span>
                </motion.button>
                <div className="w-60">
                    <motion.p whileHover={{ scale: 1.05 }} className={`${isTodoCompleted && 'line-through text-gray-400'} mx-4 truncate`}>{text}</motion.p>
                </div>

            </div>
            <motion.button whileTap={{ scale: 1.2 }} type="button" onClick={() => deleteTodo(text)}>
                <svg className="w-5 h-5 text-orange-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
                <span className="sr-only">Delete task</span>
            </motion.button>
        </motion.li >
    )
}

export { TodoItem }