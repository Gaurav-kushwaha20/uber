import {Link, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import axios from "axios";
import {CaptainDataContext} from "../context/CaptainContext.jsx";

const BASE_URL = import.meta.env.VITE_BASE_URL

const CaptainLogin = () => {
    const navigate = useNavigate();
    
    // use state for email and password
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [captainData, setCaptainData] = useState({})
    const {captain, setCaptain} = useContext(CaptainDataContext);


    // handle the submit button
    const handleSubmit = async (e) => {
        e.preventDefault()
        setCaptainData({
            email,
            password
        })
        setEmail('')
        setPassword('')

        //     send the request to the server using axios
        const response = await axios.post(`${BASE_URL}/captains/login`, captainData)
        if (response.status === 200) {
            setCaptain(response.data)
            localStorage.setItem('token', response.data.token)
            navigate('/captain-home')
            
        }

    }

    return (
        <div className={'p-7 h-screen flex flex-col justify-between '}>
            <div className={'mb-7'}>
                <img className={'w-24 mb-10'} src="/new_uber.png" alt=""/>
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
                    <p className={'text-center'}>Join a fleet? <Link to={'/captain-signup'} className={'text-blue-600'}>Register
                        as a Captain</Link></p>
                </form>
            </div>

            <div>
                <Link to={'/login'}
                      className={'bg-[#10b461] flex items-center justify-center text-white mb-7 rounded-2xl px-4 py-2 border w-full text-lg placeholder:text-base'}>Sign
                    in as User</Link>
            </div>
        </div>
    )
}
export default CaptainLogin

