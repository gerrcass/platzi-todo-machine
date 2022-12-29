import { useTodos } from "../hooks/useTodos"
import { motion } from 'framer-motion'

const TodoCounter = () => {
    const { completedTodos, count } = useTodos()

    const percentage = completedTodos / (count || 1) * 100

    return (
        <motion.h2
            initial={{ opacity: 0, scale: 0, y: -100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut', type: 'spring' }}
            className="text-2xl mb-5 leading-none drop-shadow font-medium">Things to do<br />
            <span
                className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded-full"
            >
                {`${percentage.toFixed(0)}% done`}
            </span>
        </motion.h2>
    )
}

export { TodoCounter }