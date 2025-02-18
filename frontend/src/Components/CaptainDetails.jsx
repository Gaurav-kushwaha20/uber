import React from 'react';

const CaptainDetails = () => {
    return (
        <div>
            {/* captain name and income */}
            <div className={'h-1/4 px-4 flex justify-between items-center'}>
                {/* passenger photo and Name */}
                <div className={'flex items-center gap-3'}>
                    <img className={'w-14'} src="https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-05-512.png"
                         alt=""/>
                    <p className={'text-xl'}>Harsh Patel</p>
                </div>

                {/* Captain Income   */}
                <div>
                    <p className={'text-gray-800 text-xl font-medium'}>₹295.00</p>
                    <p className={'text-gray-500'}>Earned</p>
                </div>
            </div>


            {/*    summery data*/}
            <div className={'h-2/4 bg-gray-300 mx-6 mt-10 rounded-3xl py-3'}>
                <div className={'flex  px-2 flex justify-between '}>

                    <div className={'px-1'}>
                        <i className="ri-timer-2-line text-3xl font-normal"></i>
                        <p>10.2</p>
                        <p>Hours online</p>
                    </div>
                    <div className={'px-1'}>
                        <i className="ri-timer-2-line text-3xl font-normal"></i>
                        <p>10.2</p>
                        <p>Hours online</p>
                    </div>
                    <div className={'px-1'}>
                        <i className="ri-timer-2-line text-3xl font-normal"></i>
                        <p>10.2</p>
                        <p>Hours online</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CaptainDetails;