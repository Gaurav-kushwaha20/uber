import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {CaptainDataContext} from "../context/CaptainContext.jsx";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL


const CaptainProtectedWrapper = ({children}) => {
    const {captain, setCaptain} = useContext(CaptainDataContext)
    const [isLoading, setIsLoading] = useState(false)
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/captain-login");
        }

        axios.get(`${BASE_URL}/captains/profile`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            if (response.status === 200) {
                setCaptain(response.data.captain);
            }
        }).catch(error => {
            console.log(error);
            localStorage.removeItem('token');
            navigate("/captain-login");
        })
    }, [token, navigate]);

    if (isLoading) {
        return <div>
            loading...
        </div>
    }

    return (
        <>
            {children}
        </>
    )

}

export default CaptainProtectedWrapper;