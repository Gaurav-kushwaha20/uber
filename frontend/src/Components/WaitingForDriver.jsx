import React from 'react';

const WaitingForDriver = (props) => {
    return (<div
        className={`${props.waitingForDriver ? '' : 'translate-y-full'} absolute bottom-0 h-[70vh] w-full bg-white py-3 transform duration-500`}>
        <i className="ri-arrow-down-wide-line absolute text-2xl left-[45%] cursor-pointer" onClick={() => {
            props.setWaitingForDriver(false);
        }}></i>

        <div className={'w-[80vw] h-full  mx-auto pt-5 bg-gray-100  shadow-2xl shadow-gray-300 rounded-lg'}>
            <p className={'text-2xl font-semibold text-center'}>Waiting For Driver...</p>
            <div
                className="mt-2 h-[5px] w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-gradient"></div>

            {/* choosed vehicle image */}
            <div className={'flex justify-between items-center'}>
                <img src="/uber-car.png" alt="car image" className={'h-44'}/>

                {/* driver details */}
                <div className={'mr-4'}>
                    <p className={'text-lg font-medium'}>Sarthak</p>
                    <p className={'text-xl font-semibold'}>MP40UP, 3050</p>
                    <p className={'text-lg font-medium'}>Maruti Suzuki ALto</p>
                </div>
            </div>
            <div className={'h-1 bg-gray-700 mt-5'}></div>

            {/*  User current Location, user destination and price   */}
            <div className={'w-[90%] mx-auto'}>

                {/*   User Current Location */}
                <div className={'mt-5 flex items-center gap-5'}>
                    <i className="ri-map-pin-2-fill text-2xl"></i>
                    <div className={'flex flex-col gap-1'}>
                        <span className={'text-3xl font-bold'}>562/11-A</span>
                        <span className={'text-xl font-normal'}>Kaikondrahalli, Bengaluru, Karnataka</span>
                    </div>
                </div>


                {/*  User Destination Location  */}
                <div className={'mt-5 flex items-center gap-5'}>
                    <i className="ri-rectangle-fill text-2xl"></i>
                    <div className={'flex flex-col gap-1'}>
                        <span className={'text-3xl font-bold'}>Third Wave Coffee</span>
                        <span className={'text-xl font-normal'}>17th Cross Rd, PWD Quaters, 1st Sector,</span>
                        <span className={'text-xl font-normal'}>HSR Layout, Bengalauru, Karnataka</span>
                    </div>
                </div>


                {/*    User Price Section   */}
                <div className={'mt-5 flex items-center gap-5'}>
                    <i className="ri-price-tag-fill text-2xl"></i>
                    <div className={'flex flex-col gap-1'}>
                        <span className={'text-3xl font-bold'}>₹210</span>
                        <span className={'text-xl font-normal'}>Cash, Cash</span>
                        <span className={'text-xl font-normal'}></span>
                    </div>
                </div>


            </div>
        </div>
    </div>);
};

export default WaitingForDriver;