import PortalReactDOM from 'react-dom'

const CenterModal = ({ children }) => (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                {children}
            </div>
        </div>
    </div >
)

const Modal = ({ children }) => {
    return PortalReactDOM.createPortal(
        <CenterModal>{children}</CenterModal>,
        document.getElementById('modal')
    )
}

export { Modal }