import {useContext, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {CaptainDataContext} from "../context/CaptainContext.jsx";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL


const CaptainSignup = () => {
    const navigate = useNavigate();
    const {captain, setCaptain} = useContext(CaptainDataContext);



    // use state for form fields
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [vehicleColor, setVehicleColor] = useState("");
    const [vehiclePlate, setVehiclePlate] = useState("");
    const [vehicleCapacity, setVehicleCapacity] = useState("");
    const [vehicleType, setVehicleType] = useState("");

    // console.log(captain);

    // handle the submit button
    const handleSubmit = async (e) => {
        e.preventDefault();
        const captainData = {
            fullname: {
                firstname: firstName,
                lastname: lastName
            },
            email: email,
            password: password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: vehicleType
            }
        }

        // send the request to the server using axios
        const response = await axios.post(`${BASE_URL}/captains/register`, captainData)
        
        

        if (response.status === 201) {
            setCaptain(response.data);
            localStorage.setItem('token', response.data.token);
            navigate('/captain-home')

            //  clear the field
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setVehicleColor("");
            setVehiclePlate("");
            setVehicleCapacity("");
            setVehicleType("");
        }


    };

    return (
        <div className="p-7 h-screen flex flex-col justify-between">
            <div className="mb-7">
                <img className="w-24 mb-10" src="/new_uber.png" alt=""/>
                <form onSubmit={handleSubmit}>
                    {/* First name and Last name */}
                    <h3 className="text-xl font-medium mb-2">What is your name?</h3>
                    <div className="flex gap-2">
                        <input
                            className="bg-[#eeeeee] mb-7 w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            type="text"
                            placeholder="First Name"
                        />
                        <input
                            className="bg-[#eeeeee] mb-7 w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            type="text"
                            placeholder="Last Name"
                        />
                    </div>

                    {/* Email */}
                    <h3 className="text-xl font-medium mb-2">What is your email?</h3>
                    <input
                        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        type="email"
                        placeholder="email@example.com"
                        autoComplete={'email'}
                    />

                    {/* Password */}
                    <h3 className="text-xl font-medium mb-2">Enter password</h3>
                    <input
                        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        type="password"
                        autoComplete="current-password"
                    />

                    {/*  vehicle details */}

                    <div className={'flex gap-2'}>

                        <div className={'w-1/2'}>
                            {/* Vehicle Color */}
                            <h3 className="text-xl font-medium mb-2">Vehicle Color</h3>
                            <input
                                className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full border text-lg placeholder:text-base"
                                value={vehicleColor}
                                onChange={(e) => setVehicleColor(e.target.value)}
                                required
                                type="text"
                                placeholder="e.g., Red"
                            />
                        </div>

                        <div className={'w-1/2'}>

                            {/* Vehicle Plate */}
                            <h3 className="text-xl font-medium mb-2">Vehicle Plate</h3>
                            <input
                                className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full border text-lg placeholder:text-base"
                                value={vehiclePlate}
                                onChange={(e) => setVehiclePlate(e.target.value)}
                                required
                                type="text"
                                placeholder="e.g., ABC-1234"
                            />
                        </div>


                    </div>

                    <div className={'flex gap-2'}>
                        <div className={'w-1/2'}>
                            {/* Vehicle Capacity */}
                            <h3 className="text-xl font-medium mb-2">Vehicle Capacity</h3>
                            <input
                                className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                                value={vehicleCapacity}
                                onChange={(e) => setVehicleCapacity(e.target.value)}
                                required
                                type="number"
                                placeholder="e.g., 4"
                            />
                        </div>

                        <div className={'w-1/2'}>
                            {/* Vehicle Type */}
                            <h3 className="text-xl font-medium mb-2">Vehicle Type</h3>
                            <select
                                className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                                value={vehicleType}
                                onChange={(e) => setVehicleType(e.target.value)}
                                required
                            >
                                <option value="" disabled>
                                    Select vehicle
                                </option>
                                <option value="auto">Auto</option>
                                <option value="motorcycle">Motorcycle</option>
                                <option value="car">Car</option>
                            </select>
                        </div>
                    </div>


                    {/* Submit Button */}
                    <button className="bg-[#111] text-white mb-3 rounded-2xl px-4 py-2 border w-full text-lg">
                        Create Captain Account
                    </button>
                    <p className="text-center">
                        Already Have an Account?{" "}
                        <Link to={"/captain-login"} className="text-blue-600">
                            Login Here
                        </Link>
                    </p>
                </form>
            </div>

            <div>
                <Link
                    to={"/signup"}
                    className="bg-[#10b461] flex items-center justify-center text-white mb-7 rounded-2xl px-4 py-2 border w-full text-lg"
                >
                    Sign up as User
                </Link>
            </div>
        </div>
    );
};
export default CaptainSignup;
