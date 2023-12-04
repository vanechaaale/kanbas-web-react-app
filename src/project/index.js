import Signin from "../users/signin";
import { Routes, Route, Navigate } from "react-router-dom";
import ProjectNav from "../ProjectNav";
import Account from "../users/account";
function Project() {
    return (
        <>
            <div className="row">
                <div className="col-sm">
                    <ProjectNav />
                </div>
            </div>
            <div className="row">
                <div className="col-md">
                    <Routes>
                        <Route path="/" element={<Navigate to="/project/home" />} />
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/account" element={<Account />} />

                    </Routes>
                </div>
            </div>
        </>

);
}
export default Project;