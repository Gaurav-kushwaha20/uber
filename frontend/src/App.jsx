import {Route, Routes} from "react-router-dom";
import Start from "./pages/Start.jsx";
import UserLogin from "./pages/UserLogin.jsx";
import UserSignup from "./pages/UserSignup.jsx";
import CaptainLogin from "./pages/CaptainLogin.jsx";
import CaptainSignup from "./pages/CaptainSignup.jsx";
import Home from "./pages/Home.jsx";
import UserProtectWrapper from "./pages/UserProtectWrapper.jsx";
import UserLogout from "./pages/UserLogout.jsx";
import CaptainHome from "./pages/Captain-Home.jsx";
import CaptainProtectedWrapper from "./pages/CaptainProtectedWrapper.jsx";
import CaptainLogout from "./pages/CaptainLogout.jsx";
import Riding from "./pages/Riding.jsx";
import CaptainRiding from "./pages/CaptainRiding.jsx";


const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Start/>}/>
                <Route path="/home" element={
                    <UserProtectWrapper>
                        <Home/>
                    </UserProtectWrapper>}
                />


                <Route path="/logout" element={<UserLogout/>}/>
                <Route path="/login" element={<UserLogin/>}/>
                <Route path="/signup" element={<UserSignup/>}/>
                <Route path="/riding" element={<Riding/>}/>

                {/*    captain route*/}
                <Route path="/captain-login" element={<CaptainLogin/>}/>
                <Route path="/captain-signup" element={<CaptainSignup/>}/>
                <Route path="/captain-logout" element={<CaptainLogout/>}/>
                <Route path="/captain-riding" element={<CaptainRiding/>}/>
                

                <Route path={'/captain-home'} element={
                    <CaptainProtectedWrapper>
                        <CaptainHome/>
                    </CaptainProtectedWrapper>
                }
                />
            </Routes>
        </div>
    )
}

export default App