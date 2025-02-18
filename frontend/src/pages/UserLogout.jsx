import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const BASE_URL = import.meta.env.VITE_BASE_URL;


export const UserLogout = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    useEffect(() => {
        if (!token) {
            navigate("/login");
        }

        axios.get(`${BASE_URL}/users/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if (response.status === 200) {
                localStorage.removeItem("token");
                navigate("/login");

            }
        })
    },[])



    return (
        <div>
            Logout
        </div>
    )
}
export default UserLogout;