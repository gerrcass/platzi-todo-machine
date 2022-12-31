//Using High Order Component (HOC)👇
import { useEffect, useState } from "react"
import { localStorageKey } from "../hooks/useLocalStorage"
import { Modal } from "./Modal"
import { ChangeAlertForm } from "./ChangeAlertForm"

const ChangeAlert = ({ show, toggleShow, setOpenModal }) => {
    const handleClick = () => {
        toggleShow()
        setOpenModal(false)
    }
    if (show) {
        return (
            <Modal>
                <ChangeAlertForm onClick={handleClick} />
            </Modal>
        )
    }
    return null
}

const withStorageListener = (WrapperComponent) => (props) => {
    const [storageChange, setStorageChange] = useState(false)

    const onStorageChange = (storageChange) => {
        if (storageChange.key === localStorageKey) {
            setStorageChange(true)
        }
    }

    useEffect(() => {
        window.addEventListener('storage', onStorageChange)
        return () => window.removeEventListener('storage', onStorageChange)
    }, [])

    const toggleShow = () => {
        props.synchronize()
        setStorageChange(false)
    }

    return (
        <WrapperComponent
            {...props}
            show={storageChange}
            toggleShow={toggleShow}
        />
    )
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }

/* 
//Using Custom Hook👇
import { useEffect, useState } from "react"
import { localStorageKey } from "../hooks/useLocalStorage"
import { Modal } from "./Modal"
import { ChangeAlertForm } from "./ChangeAlertForm"

const ChangeAlert = ({ setOpenModal, synchronize }) => {
    const { show, toggleShow } = useStorageListener(synchronize)

    const handleClick = () => {
        toggleShow()
        setOpenModal(false)
    }
    if (show) {
        return (
            <Modal>
                <ChangeAlertForm onClick={handleClick} />
            </Modal>
        )
    }
    return null
}

const useStorageListener = (synchronize) => {
    const [storageChange, setStorageChange] = useState(false)

    const onStorageChange = (storageChange) => {
        if (storageChange.key === localStorageKey) {
            setStorageChange(true)
        }
    }

    useEffect(() => {
        window.addEventListener('storage', onStorageChange)
        return () => window.removeEventListener('storage', onStorageChange)
    }, [])

    const toggleShow = () => {
        synchronize()
        setStorageChange(false)
    }

    return {
        show: storageChange,
        toggleShow
    }
}

export { ChangeAlert } */