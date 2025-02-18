import {createContext, useState, useContext} from "react";

export const CaptainDataContext = createContext()

const CaptainContext = ({children}) => {

    const [captain, setCaptain] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)

    const updateCaptain = (captainData) => {
        setCaptain(captainData)
    };

    const value = {
        captain,
        setCaptain,
        isLoading,
        error,
        setError,
        updateCaptain,
        setIsLoading,

    }

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    )
}

export default CaptainContext