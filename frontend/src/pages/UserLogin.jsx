import {Link, useNavigate} from "react-router-dom";
import {useState, useContext} from "react";
import axios from "axios";
import {UserDataContext} from "../context/UserContext.jsx";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const UserLogin = () => {
    // use state for email and password
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();
    const {user, setUser} = useContext(UserDataContext);

    // handle the submit button
    const handleSubmit = async (e)=>{
        e.preventDefault()
        const userData = {
            email,
            password
        }
        const response = await axios.post(`${BASE_URL}/users/login`, userData)
        if(response.status === 200) {
            const data = response.data;
            // console.log(data.user)
            setUser(data.user);
            localStorage.setItem('token', data.token);
            navigate("/home");
        }
        setEmail('')
        setPassword('')
    }

    return (
        <div className={'p-7 h-screen flex flex-col justify-between '}>
            <div className={'mb-7'}>
                <img className={'w-16 mb-10'} src="/uber-logo.png" alt=""/>
                <form onSubmit={handleSubmit}>
                    <h3 className={'text-xl font-medium mb-2'}>what is your email?</h3>
                    <input
                        className={'bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        type="email"
                        placeholder={'email@example.com'}
                    />
                    <h3 className={'text-xl font-medium mb-2'}>Enter password</h3>
                    <input
                        className={'bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        type="password"
                    />
                    <button
                        className={'bg-[#111] text-white mb-3 rounded-2xl px-4 py-2 border w-full text-lg placeholder:text-base'}>Login
                    </button>
                    <p className={'text-center'}>New here? <Link to={'/signup'} className={'text-blue-600'} >Create an Account</Link> </p>
                </form>
            </div>

            <div>
                <Link to={'/captain-login'} className={'bg-[#10b461] flex items-center justify-center text-white mb-7 rounded-2xl px-4 py-2 border w-full text-lg placeholder:text-base'}>Sign in as Captain</Link>
            </div>
        </div>
    )
}
export default UserLogin

