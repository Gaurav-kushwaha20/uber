import React from 'react';
import {Link} from "react-router-dom";

const Riding = () => {
    return (<div className={'h-screen w-screen'}>
        {/* Home icon to navigate */}
        <Link to={'/home'}>
            <div className={'fixed right-5 top-5'}>
                <i className="ri-home-fill text-2xl">Home</i>
            </div>
        </Link>

        <div className={'h-1/2'}>
            <img className={'w-full h-full object-cover'} src="/map.avif" alt="map logo"/>
        </div>

        <div>
            {/*    Driver information */}
            <div className={'flex justify-between items-center'}>
                <img src="/uber-car.png" alt="car image" className={'h-44'}/>

                {/* driver details */}
                <div className={'mr-4'}>
                    <p className={'text-lg font-medium'}>Sarthak</p>
                    <p className={'text-xl font-semibold'}>MP40UP, 3050</p>
                    <p className={'text-lg font-medium'}>Maruti Suzuki ALto</p>
                </div>
            </div>

            <div className={'w-[90%] mx-auto'}>

                {/*   User Current Location */}
                <div className={'mt-5 flex items-center gap-5'}>
                    <i className="ri-map-pin-2-fill text-2xl"></i>
                    <div className={'flex flex-col gap-1'}>
                        <span className={'text-2xl font-bold'}>562/11-A</span>
                        <span className={'text-xl font-normal'}>Kaikondrahalli, Bengaluru, Karnataka</span>
                    </div>
                </div>


                {/*    User Price Section   */}
                <div className={'mt-5 flex items-center gap-5'}>
                    <i className="ri-price-tag-fill text-2xl"></i>
                    <div className={'flex flex-col gap-1'}>
                        <span className={'text-2xl font-bold'}>₹210</span>
                        <span className={'text-xl font-normal'}>Cash, Cash</span>
                        <span className={'text-xl font-normal'}></span>
                    </div>
                </div>
            </div>

            {/* Make a payment button */}
            <div className={'flex justify-center mt-5'}>
                <button className={'bg-green-300 w-[85%] px-4 py-2 rounded-lg mx-auto text-xl font-semibold'}>Make a
                    Payment
                </button>
            </div>
        </div>
    </div>);
};
export default Riding;