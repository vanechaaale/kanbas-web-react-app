import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Account() {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
    const save = async () => {
    await client.updateUser(account);
  };
    const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };

  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
  };




  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
    fetchAccount();
    }
  }, []);
  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div className={"account"}>
            <div className={"row"} style={{ padding: '10px'}}>
                <div className={"col-2"}>
                    <input value={account.password}
                           onChange={(e) => setAccount({ ...account,
                               password: e.target.value })}/>
                </div>
            </div>
            <div className={"row"} style={{ padding: '10px'}}>
                <div className={"col-2"}>
                    <input value={account.firstName}
                           onChange={(e) => setAccount({ ...account,
                               firstName: e.target.value })}/>
                </div>
            </div>
            <div className={"row"} style={{ padding: '10px'}}>
                <div className={"col-2"}>
                    <input value={account.lastName}
                           onChange={(e) => setAccount({ ...account,
                               lastName: e.target.value })}/>
                </div>
            </div>
            <div className={"row"} style={{ padding: '10px'}}>
                <div className={"col-2"}>
                    <input value={account.dob}
                           onChange={(e) => setAccount({ ...account,
                               dob: e.target.value })}/>
                </div>
            </div>
            <div className={"row"} style={{ padding: '10px'}}>
                <div className={"col-2"}>
                    <input value={account.email}
                           onChange={(e) => setAccount({ ...account,
                               email: e.target.value })}/>
                </div>
            </div>
          <select style={{ margin: '10px'}} onChange={(e) => setAccount({ ...account,
              role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
        </div>
      )}
      <div className="row">
                <div className="col-2">
                    <button className="btn btn-primary w-100" onClick={save}>
                        Save
                    </button>
                </div>
      </div>
        <div className="row">
            <div className={"col-2"}>
                <button className="btn btn-danger w-100" onClick={signout} style={{marginTop: '10px'}}>
                Signout
                </button>
            </div>
        </div>
        <div className="row">
            <div className={"col-2"}>
                <Link to="/project/admin/users" className="btn btn-warning w-100" style={{marginTop: '10px'}}>
                Users
                </Link>
            </div>
        </div>
    </div>
  );
};
export default Account;