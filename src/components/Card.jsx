
const Card = ({ children }) => {
    return (
        <div className='h-screen flex flex-col justify-center items-center bg-gradient-to-bl from-gray-200 via-gray-300 to-gray-100'>
            <div className="overflow-y-scroll w-[25rem] h-[30rem] px-5 py-12 rounded-md shadow-xl bg-gradient-to-r from-rose-400 to-orange-300 text-center">
                {children}
            </div>
        </div>

    )
}

export { Card }