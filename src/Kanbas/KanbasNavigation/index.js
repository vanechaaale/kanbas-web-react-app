import { Link, useLocation } from "react-router-dom";
import './index.css';
import {CgProfile, } from "react-icons/cg";
import {BiBook} from "react-icons/bi";
import {BsSpeedometer, BsClock} from "react-icons/bs";
import {RxCalendar} from "react-icons/rx";
import {RiComputerLine} from "react-icons/ri";
import {GrCreativeCommons, GrInbox} from "react-icons/gr";
import {FiHelpCircle} from "react-icons/fi";
import {GoInbox} from "react-icons/go";

function KanbasNavigation() {
    const links = {
        "Account": <CgProfile/>,
        "Dashboard": <BsSpeedometer/>,
        "Courses": <BiBook/>, 
        "Calendar": <RxCalendar/>, 
        "Inbox": <GoInbox/>, 
        "History": <BsClock/>,
        "Studio": <RiComputerLine/>,
        "Commons": <GrCreativeCommons/>, 
        "Help": <FiHelpCircle/>,
    };
    const { pathname } = useLocation();
    return (
        <div className="wd-kanbas-navigator list-group">
            <img style={{ padding: 12}} src="../../images/neu-logo.png" />
            {Object.entries(links).map(([link, icon], index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`list-group-item ${pathname.includes(link) && "active"}`}>
                    {icon}
                    <br></br>
                    {link}
                </Link>
            ))}
        </div>
    );
}
export default KanbasNavigation;