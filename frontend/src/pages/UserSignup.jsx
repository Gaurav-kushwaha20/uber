import {Link, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import axios from "axios";
import {UserDataContext} from "../context/UserContext.jsx";

const BASE_URL = import.meta.env.VITE_BASE_URL

const UserSignup = () => {
    // use state for email and password
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState('')
    const {user, setUser} = useContext(UserDataContext)
    const navigate = useNavigate()


    // handle the submit button
    const handleSubmit = async (e) => {
        e.preventDefault()

        const newUser = {
            fullname: {
                firstname,
                lastname,
            },
            email,
            password
        }
        const response = await axios.post(`${BASE_URL}/users/register`, newUser)

        if (response.status === 201) {
            console.log(response)
            const data = response.data;
            setUserData(data)
            localStorage.setItem('token', data.token);
            navigate('/login')
        }


        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')

    }
    return (
        <div className={'p-7 h-screen flex flex-col justify-between '}>
            <div className={'mb-7'}>
                <img className={'w-16 mb-10'} src="/uber-logo.png" alt=""/>
                <form onSubmit={handleSubmit}>
                    {/* First name and Last name */}
                    <h3 className={'text-xl font-medium mb-2'}>what is your name?</h3>
                    <div className={'flex gap-2'}>
                        <input
                            className={'bg-[#eeeeee] mb-7 w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'}
                            value={firstname}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            type="text"
                            placeholder={'First Name'}
                        />

                        <input
                            className={'bg-[#eeeeee] mb-7 w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base'}
                            value={lastname}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            type="text"
                            placeholder={'Last Name'}
                        />
                    </div>


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
                        className={'bg-[#111] text-white mb-3 rounded-2xl px-4 py-2 border w-full text-lg placeholder:text-base'}>Create
                        Account
                    </button>
                    <p className={'text-center'}>Already Have an Account? <Link to={'/login'}
                                                                                className={'text-blue-600'}>Login
                        Here</Link></p>
                </form>
            </div>

            <div>
                <Link to={'/captain-signup'}
                      className={'bg-[#10b461] flex items-center justify-center text-white mb-7 rounded-2xl px-4 py-2 border w-full text-lg placeholder:text-base'}>Sign
                    up as Captain</Link>
            </div>
        </div>
    )

}
export default UserSignup

