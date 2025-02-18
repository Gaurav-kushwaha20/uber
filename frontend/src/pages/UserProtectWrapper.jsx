import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {UserDataContext} from "../context/UserContext.jsx";
const BASE_URL = import.meta.env.VITE_BASE_URL

const UserProtectWrapper = ({children}) => {
    const {user, setUser} = useContext(UserDataContext)
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
        axios.get(`${BASE_URL}/users/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
             if(response.status === 200) {
                 setUser(response.data.user);
             }
        }).catch(error => {
            console.log(error);
            localStorage.removeItem('token');
            navigate("/login");
        })


    }, [token, navigate]);


    if(isLoading) {
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

export default UserProtectWrapper;