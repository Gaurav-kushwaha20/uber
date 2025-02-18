import React from 'react';

const VehiclePanel = (props) => {
    return (<div
            className={`fixed w-full flex flex-col gap-5 bottom-2 p-2 bg-white ${props.vehiclePanel ? '' : 'translate-y-full'} transform duration-500`}>
            <i className="ri-arrow-down-wide-line absolute text-2xl left-[45%] cursor-pointer" onClick={() => {
                props.setVehiclePanel(false)
            }}></i>

            <h3 className={'text-2xl font-bold mb-2'}>Choose a vehicle</h3>

            {/* for car */}
            <div
                onClick={() => {
                    props.setVehiclePanel(false);
                    props.setConfirmRide(true);
                }}
                className={'flex gap-0 p-1 justify-center items-center w-full hover:bg-gray-300 border-black border-2 rounded-xl '}>
                {/*Uber image */}
                <div className={'uber-car'}>
                    <img className={''} width={100} src="/uber-car.png" alt="car image"/>
                </div>

                {/* uber details */}
                <div className={'flex flex-col w-1/2'}>
                    <p className={'font-medium'}>Uber Go <span><i className="ri-user-3-line"></i></span>
                        <span>4</span></p>
                    <p className={'font-medium'}>2 Min away</p>
                    <p className={'font-medium'}>Affordable, Compact</p>
                    <p className={'font-medium'}>rides</p>
                </div>

                {/* uber rent */}
                <div>
                    <p className="text-2xl font-semibold text-gray-800  px-4 py-2 rounded-lg shadow-sm">
                        Rs.193
                    </p>
                </div>
            </div>

            {/*  for uber Moto   */}
            <div
                className={'flex gap-3 p-1 justify-center items-center w-full hover:bg-gray-300 border-black border-2 rounded-xl '}>
                {/*Uber image */}
                <div className={'uber-car '}>
                    <img className={''} width={100} src="/uber-moto.png" alt="car image"/>
                </div>

                {/* uber details */}
                <div className={'flex flex-col w-1/2'}>
                    <p className={'font-medium'}>Uber Go <span><i className="ri-user-3-line"></i></span>
                        <span>1</span></p>
                    <p className={'font-medium'}>2 Min away</p>
                    <p className={'font-medium'}>Affordable, Compact</p>
                    <p className={'font-medium'}>rides</p>
                </div>

                {/* uber rent */}
                <div>
                    <p className="text-2xl font-semibold text-gray-800  px-4 py-2 rounded-lg shadow-sm">
                        Rs.193
                    </p>
                </div>

            </div>

            {/*    for uber auto */}
            <div
                className={'flex gap-3 p-1 justify-center items-center w-full hover:bg-gray-300 border-black border-2 rounded-xl '}>
                {/*Uber image */}
                <div className={'uber-car '}>
                    <img className={''} width={100} src="/uber-auto.png" alt="car image"/>
                </div>

                {/* uber details */}
                <div className={'flex flex-col w-1/2'}>
                    <p className={'font-medium'}>Uber Go <span><i className="ri-user-3-line"></i></span>
                        <span>3</span></p>
                    <p className={'font-medium'}>2 Min away</p>
                    <p className={'font-medium'}>Affordable, Compact</p>
                    <p className={'font-medium'}>rides</p>
                </div>

                {/* uber rent */}
                <div>
                    <p className="text-2xl font-semibold text-gray-800  px-4 py-2 rounded-lg shadow-sm">
                        Rs.193
                    </p>
                </div>

            </div>
        </div>);
};

export default VehiclePanel;