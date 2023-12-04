import Signin from "../users/signin";
import UserTable from "../users/table";
import { Routes, Route, Navigate } from "react-router-dom";
import ProjectNav from "../ProjectNav";
import Account from "../users/account";
import Signup from "../users/signup";
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
                        <Route path="/admin/users" element={<UserTable />} />
                        <Route path="/" element={<Navigate to="/project/home" />} />
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/account/:id" element={<Account />} />
                    </Routes>
                </div>
            </div>
        </>

);
}
export default Project;