import { motion } from "framer-motion"

const LoadingState = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center py-4">
            <div className="flex flex-col items-center mx-10">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-28 h-28"
                    preserveAspectRatio="xMidYMid"
                    viewBox="0 0 100 100">
                    <g transform="matrix(.82 0 0 .82 9 9)"><animateTransform attributeName="transform" dur="1.639344262295082s" keyTimes="0;0.33;0.66;1" repeatCount="indefinite" type="translate" values="-20 -20;20 -20;0 20;-20 -20" /><path fill="#fdba74" d="M44.19 26.158a17.914 17.914 0 0 0-12.751 5.282 17.914 17.914 0 0 0-5.282 12.751c0 4.817 1.876 9.345 5.282 12.751 3.406 3.406 7.934 5.282 12.751 5.282s9.345-1.876 12.751-5.282a17.914 17.914 0 0 0 5.282-12.751c0-4.817-1.876-9.345-5.282-12.751a17.908 17.908 0 0 0-12.751-5.282z" /><path fill="#fb7185" d="M78.712 72.492 67.593 61.373l-3.475-3.475a24.073 24.073 0 0 0 3.475-7.596 24.3 24.3 0 0 0 0-12.238 24.074 24.074 0 0 0-6.297-10.979A24.119 24.119 0 0 0 44.19 20a24.118 24.118 0 0 0-17.105 7.085c-9.447 9.447-9.447 24.763 0 34.21a24.115 24.115 0 0 0 17.105 7.086c4.798 0 9.593-1.425 13.708-4.262l9.695 9.695 4.899 4.899c.859.858 1.984 1.287 3.11 1.287s2.251-.429 3.11-1.288a4.4 4.4 0 0 0 0-6.22zm-21.77-15.55c-3.406 3.406-7.934 5.282-12.751 5.282s-9.345-1.876-12.751-5.282a17.914 17.914 0 0 1-5.282-12.751c0-4.817 1.876-9.345 5.282-12.751a17.914 17.914 0 0 1 12.751-5.282c4.817 0 9.345 1.876 12.751 5.282a17.914 17.914 0 0 1 5.282 12.751 17.924 17.924 0 0 1-5.282 12.751z" /></g>
                </svg>
                <p className="font-bold w-64 text-gray-400">Loading...</p>
            </div>
        </motion.div>
    )
}

export { LoadingState }