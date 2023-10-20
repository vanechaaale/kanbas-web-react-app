import ModuleList from "../Modules/ModuleList";
import {LiaFileImportSolid} from 'react-icons/lia';
import {FaCreativeCommonsShare} from 'react-icons/fa';
import {FiTarget} from 'react-icons/fi';
import {BsFillBarChartFill} from 'react-icons/bs';
import {GrAnnounce} from 'react-icons/gr';
import {AiOutlineBell} from 'react-icons/ai'; 
import {AiFillCheckCircle} from 'react-icons/ai';


function Home() {
  return (
    <div className="row">
      <div className="col-9">
        <h2>Home</h2>
        <ModuleList />
      </div>
      <div className="col-2">
        <h2>Status</h2>
        <div className="container-course-status">
                <h2> Course Status </h2>
                <div style={{ width: '240px', marginLeft: '4px', paddingBottom: '60px' }}>
                    <button style={{ margin: '0', float: 'left', width: '120px' }} className="btn btn-secondary">
                        <i className="fa fa-ban"></i>
                        <AiFillCheckCircle/>
                        Unpublish
                    </button>
                    <button style={{ margin: '0', float: 'right', width: '120px' }} className="btn btn-success">
                        <i className="fa fa-check-circle"></i>
                        <AiFillCheckCircle/>
                        Published
                    </button>
                </div>
                <ul>
                    <li>
                        <button className="btn btn-secondary">
                            <LiaFileImportSolid/>
                            <i className="fa fa-upload fa-1x"></i>
                            Import Existing Content
                        </button>
                    </li>
                    <li>
                        <button className="btn btn-secondary">
                            <FaCreativeCommonsShare/>
                            <i className="fa fa-arrow-circle-right fa-1x"></i>
                            Import From Commons
                        </button>
                    </li>
                    <li>
                        <button className="btn btn-secondary">
                            <i className="fa fa-bullseye fa-1x"></i>
                            <FiTarget/> 
                            Choose Home Page
                        </button>
                    </li>
                    <li>
                        <button className="btn btn-secondary">
                            <i className="fa fa-chart-bar fa-1x"></i>
                            <BsFillBarChartFill/>
                            View Course Stream
                        </button>
                    </li>
                    <li>
                        <button className="btn btn-secondary">
                            <i className="fa fa-bullhorn fa-1x"></i>
                            <GrAnnounce/>
                            New Announcement
                        </button>
                    </li>
                    <li>
                        <button className="btn btn-secondary">
                            <i className="fa fa-chart-bar fa-1x"></i>
                            <BsFillBarChartFill/>
                            New Analytics
                        </button>
                    </li>
                    <li>
                        <button className="btn btn-secondary">
                            <i className="fa fa-bell fa-1x"></i>
                            <AiOutlineBell/>
                            View Course Notifications
                        </button>
                    </li>
                </ul>
                <h2> To Do </h2>
                <hr />
                <h2>
                    Coming Up
                    <a style={{ fontWeight: 'normal', float: 'right', textDecoration: 'none', color: '#b52828' }} href="#">
                        View Calendar
                    </a>
                    <i style={{ float: 'right', marginRight: '10px' }} className="fa fa-calendar"></i>
                </h2>
                <hr />
                <div className="container-coming-up">
                    <ul>
                        <li>
                            <a href="#"> Lecture CS4550.12631.202410 Sep 7 at 11:45am </a>
                        </li>
                        <li>
                            <a href="#"> Lecture CS4550.12631.202410 Sep 11 at 11:45am </a>
                        </li>
                        <li>
                            <a href="#"> CS5610 06 SP23 Lecture Sep 11 at 6 pm </a>
                        </li>
                    </ul>
                </div>
            </div>
      </div>
    </div>
  );
}
export default Home;
