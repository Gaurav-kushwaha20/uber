import React from 'react';
import {Link} from "react-router-dom";
import RidePopUp from "../Components/RidePopUp.jsx";
import CaptainDetails from "../Components/CaptainDetails.jsx";
import ConfirmRidePopUp from "../Components/ConfirmRidePopUp.jsx";

const CaptainHome = () => {
    const [ridePopUp, setRidePopUp] = React.useState(true);
    const [confirmRidePopUp, setConfirmRidePopUp] = React.useState(false);
    return (<div className={'h-screen w-screen relative overflow-hidden'}>

        <div className={'h-2/3'}>
            <div id={'background-image'} className={'w-full fixed top-2 flex justify-between items-center '}>
                <img className={' w-16 '} src="/uber-logo.png" alt="map logo"/>

                <div className={'rounded-full px-2 py-2'}>
                    <Link to={'/home'}>
                        <i className="ri-logout-box-line text-2xl"></i>
                    </Link>
                </div>
            </div>

            <img className={'w-full h-full object-cover'} src="/map.avif" alt="map logo"/>
        </div>


        {/* Down panel  */}
        <div className={'h-1/3 w-full mt-3 '}>
            <CaptainDetails/>
            <RidePopUp ridePopUp={ridePopUp} setRidePopUp={setRidePopUp} setConfirmRidePopUp={setConfirmRidePopUp}/>
            <ConfirmRidePopUp confirmRidePopUp={confirmRidePopUp} setConfirmRidePopUp={setConfirmRidePopUp}/>
        </div>
        
    </div>);
};

export default CaptainHome;