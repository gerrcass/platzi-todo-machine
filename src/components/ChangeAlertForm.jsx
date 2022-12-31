const ChangeAlertForm = ({ onClick }) => {
    return (
        <div className="bg-white py-5 px-20 rounded-xl shadow-lg">
            <p className="mb-5 text-xl leading-none drop-shadow font-medium">Something Changed!</p>
            <button
                className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                type="button"
                onClick={() => onClick()}
            >
                Refresh
            </button>
        </div>
    )
}

export { ChangeAlertForm }