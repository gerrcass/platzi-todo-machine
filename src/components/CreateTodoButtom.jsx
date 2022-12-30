import { motion } from "framer-motion"

const CreateTodoButtom = ({ setOpenModal }) => {
    return (
        <>
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                autoFocus
                className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-transparent font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-900 ml-2"
                type="button"
                onClick={() => setOpenModal(true)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <span className="sr-only">Add</span>
            </motion.button>
        </>
    )
}

export { CreateTodoButtom }