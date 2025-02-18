import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const BASE_URL = import.meta.env.VITE_BASE_URL;


export const CaptainLogout = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    useEffect(() => {
        if (!token) {
            navigate("/login");
        }

        axios.get(`${BASE_URL}/captains/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if (response.status === 200) {
                localStorage.removeItem("token");
                navigate("/captain-login");

            }
        })
    },[])



    return (
        <div>
             Captain Logged Out
        </div>
    )
}
export default CaptainLogout;