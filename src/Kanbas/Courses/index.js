import db from "../../Kanbas/Database";
import { useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import {RxHamburgerMenu} from "react-icons/rx";
import LINKS from "./CourseNavigation";

function Courses() {
  const { courseId } = useParams();
  const {pathname} = useLocation();
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div>
        <div className="wd-grid-col-page-header"> 
            <div className="breadcrumb-header">
                <RxHamburgerMenu style={{float: "left", fontSize: "1.4em", color: "#b52828"}}/>
                <nav aria-label="breadcrumb" style={{marginLeft: "50px"}}>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a style={{textDecoration: "none", color: "#b52828"}} href="#" className="course-link">
                                {course.name}
                            </a></li>
                        <li className="breadcrumb-item active" aria-current="page">
                            <b>{pathname.split('/').pop()}</b>
                        </li>
                    </ol>    
                </nav>    
            </div>
            <hr style={{marginTop: "25px"}} /> 
        </div>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "280px",
            top: "50px",
            marginTop: "50px"
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
