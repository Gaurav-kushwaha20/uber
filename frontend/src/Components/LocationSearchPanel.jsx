import React from 'react';

const LocationSearchPanel = ({toggleVehiclePanel, toggleLocationPanel}) => {

    const toogle = () => {
        toggleVehiclePanel(true)
        toggleLocationPanel(false)
    }

    return (
        <div>
            <div
                onClick={toogle}
                className={'flex items-center justify-center bg-[#eee] p-3 gap-3 my-4'}>
                <h2 className={'font-bold text-xl'}><i className="ri-map-pin-line"></i></h2>
                <h4 className={'font-medium'}>24B, Near Kapoor's Cafe, Shreyans coding school, Bhopal</h4>
            </div>
           
        </div>
    );
};

export default LocationSearchPanel;