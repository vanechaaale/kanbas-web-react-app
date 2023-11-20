import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {React, useState} from "react";
import {PiNotebookLight}  from 'react-icons/pi';
import {FaEllipsisV} from 'react-icons/fa';
function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }) { 

  return (
      <div style={{ width: '100%' }} className="wd-kanbas-dashboard-navigator">
          <span className="wd-kanbas-dashboard-title">Dashboard</span>
          <hr />
          <span className="wd-kanbas-dashboard-subtitle">
              Published Courses (7)
              <hr style={{ marginLeft: '36px', width: '90%' }} />
          </span>
          <h5>Course</h5>

        <div style={{ float: 'left', marginLeft: '33px', marginBottom: '10px' }}>

          <input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
            <button onClick={addNewCourse} style={{margin: '8px'}} className="btn btn-success"> Add</button>
            <button className="btn btn-primary" onClick={updateCourse}> Update</button>
        </div>
          
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
                          <img className="course-card-img" alt=""/>
                      </div>
                      <div className="course-card-content-text" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        <h3 className="course-card-title">
                          <span>{course.number} {course.name}</span>
                        </h3>
                        <div className="course-card-subtitle" title="Course 1 Title">
                          {course.number}.{course.endDate}
                        </div>
                        <div className="course-card-details" title="Fall 2023 Semester Full Term">
                          {course.endDate}_1 Fall 2023 Semester Full Term
                        </div>
                      </div>
                  </Link>
                  <div style={{height: '40px'}}className="course-card-icon-row">
                      <Link className="course-card-icon" to="#">
                          <i className="fa fa-book-open"></i>
                          <PiNotebookLight/>
                      </Link>
                        

                      <button className="btn btn-danger float-end" style={{textAlign:'top', paddingBottom: '0px', margin: '6px', marginTop: '2px'}}
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}>
              Delete
            </button>
            <button className="btn btn-warning float-end" style={{textAlign:'top', paddingBottom: '0px', margin: '6px', marginTop: '2px'}}
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>

                  </div>
              </div>
              ))}
          </div>
      </div>
  );
}
export default Dashboard;
