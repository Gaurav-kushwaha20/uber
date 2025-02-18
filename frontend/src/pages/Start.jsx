import {Link} from "react-router-dom";

const Start = () => {
    return (
        <div>
            <div
                className={'h-screen pt-8 w-full flex flex-col justify-between bg-[url(/traffic-light.jpg)] bg-cover bg-center'}>
                <img className={'w-16 ml-9'} src="/uber-logo.png" alt=""/>
                <div className={'bg-white pb-7 py-4 px-4'}>
                    <h2 className={'text-2xl font-bold text-center'}>Get Started With Uber</h2>
                    <Link to={'/login'}>
                        <button className={'w-full bg-black text-white py-3 rounded-lg mt-5'}>Continue</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Start

