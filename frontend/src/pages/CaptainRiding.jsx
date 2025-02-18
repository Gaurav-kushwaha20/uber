import React from 'react';
import {Link} from "react-router-dom";
import FinishRide from "../Components/FinishRide.jsx";

const CaptainRiding = () => {
    const [finishRIde, setFinishRide] = React.useState(false);
    return (
        <div className={'h-screen w-screen relative overflow-hidden'}>
            <div className={'h-5/6'}>
                <div id={'background-image'} className={'w-full fixed top-2 flex justify-between items-center '}>
                    <img className={' w-16 '} src="/uber-logo.png" alt="map logo"/>

                    <div className={'rounded-full px-2 py-2'}>
                        <Link to={'/captain-home'}>
                            <i className="ri-logout-box-line text-2xl"></i>
                        </Link>
                    </div>
                </div>

                <img className={'w-full h-full object-cover'} src="/map.avif" alt="map logo"/>
            </div>


            {/* Down panel  */}
            <div onClick={() => {
                setFinishRide(prev => !prev)
            }} className={'bg-yellow-300 w-full h-1/6 flex items-center justify-between relative'}>
                {/* center this icon using the left-1/2    */}
                {/*<i className="ri-arrow-up-wide-line absolute text-xl font-semibold top-2 left-1/2 "></i>       */}

                {/* inset, mx-auto only apply when the element has the defined width  */}
                <i className="ri-arrow-up-wide-line absolute text-xl font-semibold w-1 inset-0 mx-auto  "></i>
                <p className={'text-xl font-semibold px-2'}>4 KM away</p>
                <button
                    className={' bg-green-500 py-2 rounded-3xl text-xl font-semibold text-white flex justify-center items-center px-16 py-3'}>Finish
                    Ride
                </button>

            </div>
            <FinishRide finishRIde={finishRIde} setFinishRide={setFinishRide}/>


        </div>
    );
};

export default CaptainRiding;