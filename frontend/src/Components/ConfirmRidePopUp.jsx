import React from 'react';
import {Link} from "react-router-dom";

const ConfirmRidePopUp = (props) => {
    const [otp, setOtp] = React.useState();

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (<div
        className={`${props.confirmRidePopUp ? 'h-[90vh]' : 'translate-y-full'} absolute bottom-0 w-full bg-white py-3 transform duration-500`}>

        <div className={'w-[80vw] h-full  mx-auto pt-5 bg-gray-100  shadow-2xl shadow-gray-300 rounded-lg'}>
            <p className={'text-2xl font-semibold text-center'}>Confirm Your Ride!</p>

            {/*  Passanger Name and Distance    */}
            <div className={'flex items-center justify-between'}>
                <div className={'p-5 flex gap-3 items-center'}>
                    <img className={'w-12 rounded-full'}
                         src="https://th.bing.com/th/id/R.25a7aa360b36ebb33a5c67d836e1e315?rik=uTzEfhK0Jo46Xw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fCute-Girl-HD-Images.jpg&ehk=f8oSKEEOgXyT36mlKi1prRst9doJjFVFwtkXuBoVaAY%3d&risl=&pid=ImgRaw&r=0"
                         alt=""/>
                    <p className={'text-lg font-medium'}>Ava Maxi</p>
                </div>

                <div>
                    <p className={'text-xl font-medium'}>2.2KM</p>
                </div>
            </div>


            {/*  Current Location, Destination and Fare   */}
            <div className={'mt-5 flex flex-col gap-5'}>
                <div className={'flex items-center gap-3'}>
                    <i className="ri-map-pin-line text-2xl"></i>

                    <div>
                        <p className={'text-xl font-bold'}>562/11-A</p>
                        <p>kankariya Talab, Bhopal</p>
                    </div>

                </div>


                <div className={'flex items-center gap-3'}>
                    <i className="ri-map-pin-fill text-2xl"></i>

                    <div>
                        <p className={'text-xl font-bold'}>582/14-C</p>
                        <p>Koteshowor-kathamandu</p>
                    </div>
                </div>

                <div className={'flex items-center gap-3'}>
                    <i className="ri-money-rupee-circle-line text-2xl"></i>


                    <div>
                        <p className={'text-xl font-bold'}>₹510</p>
                        <p>Cash Cash</p>
                    </div>
                </div>

            </div>


            {/*  Accept and Decline Button for the ride        */}
            <div className={'flex flex-col gap-3 mt-5'}>
                {/*  Get the otp   */}

                <form onSubmit={(e) => {
                    submitHandler(e)
                }}>
                    <input type="number"
                           value={otp}
                           onChange={(e) => setOtp(e.target.value)}
                           className={'w-full py-2 bg-[#eee] mt-3 rounded-lg pl-5 text-base'}
                           placeholder={'Enter OTP'}/>
                </form>


                <Link
                    to={'/captain-riding'}
                    className={'w-full bg-green-500 py-2 rounded-3xl text-xl font-semibold text-white flex justify-center items-center'}>Confirm
                </Link>
                <button onClick={() => {
                    props.setConfirmRidePopUp(false)
                }} className={'w-full bg-gray-400 py-2 rounded-3xl text-xl font-semibold text-white'}>Cancel Ride
                </button>
            </div>
        </div>
    </div>);
};

export default ConfirmRidePopUp;