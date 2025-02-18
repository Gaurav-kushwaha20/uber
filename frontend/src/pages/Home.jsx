import {useRef, useState} from "react";
import {useGSAP} from "@gsap/react";
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../Components/LocationSearchPanel.jsx";
import VehiclePanel from "../Components/VehiclePanel.jsx";
import ConfirmRIde from "../Components/ConfirmRIde.jsx";
import LookingForDriver from "../Components/LookingForDriver.jsx";
import WaitingForDriver from "../Components/WaitingForDriver.jsx";

const Home = () => {
    const [pickUp, setPickUp] = useState('')
    const [destination, setDestination] = useState('')
    const [panelOpen, setPanelOpen] = useState(false)
    const [confirmRide, setConfirmRide] = useState(false)
    const [waitingForDriver, setWaitingForDriver] = useState(false)
    const [lookingForDriver, setLookingForDriver] = useState(false)

    const [vehiclePanel, setVehiclePanel] = useState(false)
    const panelRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    useGSAP(function () {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: "80%",
                padding: 20
            })
        } else {
            gsap.to(panelRef.current, {
                height: "0%",
                padding: 0

            })
        }
    }, [panelOpen])

    return (
        <div className={'relative overflow-hidden'}>
            <div
                className={'absolute top-5 left-5'}>
                <img
                    className={'w-16  '}
                    src="/uber-logo.png" alt="uber logo"/>
            </div>

            <div id={'background-image'} className={'h-screen w-screen'}>
                <img className={'w-full h-full object-cover'} src="/map.avif" alt="map logo"/>
            </div>

            {/* Enter the location */}
            <div className={'absolute flex flex-col justify-end top-0 h-screen w-full'}>

                {/* pickup and destination input box */}
                <div className={'h-[20%] bg-white p-5 relative'}>
                    <div className={'absolute top-20 left-8 w-1 h-16 bg-gray-900 rounded-full'}></div>
                    <h5 className={'absolute top-0 left-3 text-2xl'} onClick={() => {
                        setPanelOpen((previousValue) => !previousValue)
                    }}>
                        <i className="ri-arrow-down-wide-line"></i>
                    </h5>
                    <h4 className={'text-2xl font-semibold'}>Find a trip</h4>
                    <form onSubmit={(e) => {
                        handleSubmit(e)
                    }}>
                        <input type="text"
                               onClick={() => {
                                   setPanelOpen(true)
                               }}
                               value={pickUp}
                               onChange={(e) => {
                                   setPickUp(e.target.value)
                               }}
                               className={'w-full py-2 bg-[#eee] mt-3 rounded-lg pl-5 text-base'}
                               placeholder={'Add a pick up location'}
                        />

                        <input type="text"
                               onClick={() => {
                                   setPanelOpen(true)
                               }}
                               value={destination}
                               onChange={e => {
                                   setDestination(e.target.value)
                               }}
                               className={'w-full py-2 bg-[#eee] mt-3 rounded-lg pl-5 text-base'}
                               placeholder={'Enter your destination'}
                        />
                    </form>
                </div>

                <div ref={panelRef} className={'bg-white h-[0%]'}>
                    <LocationSearchPanel toggleVehiclePanel={setVehiclePanel} toggleLocationPanel={setPanelOpen}/>
                </div>
            </div>


            {/* List of vehicle with their price  */}
            <div className={''}>

                <VehiclePanel setVehiclePanel={setVehiclePanel} vehiclePanel={vehiclePanel}
                              setConfirmRide={setConfirmRide}/>
                <ConfirmRIde setConfirmRide={setConfirmRide} vehicleRide={confirmRide}
                             setLookingForDriver={setLookingForDriver}/>
                <LookingForDriver lookingForDriver={lookingForDriver} setLookingForDriver={setLookingForDriver}
                                  setWaitingForDriver={setWaitingForDriver}/>
                <WaitingForDriver waitingForDriver={waitingForDriver} setWaitingForDriver={setWaitingForDriver}/>
            </div>

        </div>
    )
}
export default Home

// 4.48