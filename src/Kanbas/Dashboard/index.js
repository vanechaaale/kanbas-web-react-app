import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {PiNotebookLight}  from 'react-icons/pi';
import {FaEllipsisV} from 'react-icons/fa';
function Dashboard() {
  const courses = db.courses;

  return (
      <div style={{ width: '100%' }} className="wd-kanbas-dashboard-navigator">
          <span className="wd-kanbas-dashboard-title">Dashboard</span>
          <hr />
          <span className="wd-kanbas-dashboard-subtitle">
              Published Courses (7)
              <hr style={{ marginLeft: '36px', width: '90%' }} />
          </span>
          <div style={{ float: 'left', marginLeft: '20px' }} className="container d-flex flex-row flex-wrap">
                {courses.map((course) => (
                  <div className="card course-card">
                    
                  <Link className="course-card-content" to={`/Kanbas/Courses/${course._id}/Home`}>
                      <div className="course-card-full-img">
                          <i
                              style={{
                                  position: 'absolute',
                                  top: '12px',
                                  right: '-8px',
                                  width: '36px',
                                  height: '36px',
                                  borderRadius: '50%',
                                  color: 'white',
                              }}
                              className="fa fa-ellipsis-v">
                                <FaEllipsisV/>
                          </i>
                          <img className="course-card-img"/>
                      </div>
                      <div className="course-card-content-text">
                          <h3 className="course-card-title">
                              <span>{course.number} {course.name}</span>
                          </h3>
                          <div className="course-card-subtitle" title="Course 1 Title">
                              {course.number}.{course.endDate.replaceAll('-','')}
                          </div>
                          <div className="course-card-details" title="Fall 2023 Semester Full Term">
                          {course.endDate.replaceAll('-','')}_1 Fall 2023 Semester Full Term
                          </div>
                      </div>
                  </Link>
                  <div className="d-flex flex-row course-card-icon-row">
                      <Link className="course-card-icon" to="#">
                          <i className="fa fa-book-open"></i>
                          <PiNotebookLight/>
                      </Link>
                  </div>
              </div>
              ))}
          </div>
      </div>
  );
}
export default Dashboard;
