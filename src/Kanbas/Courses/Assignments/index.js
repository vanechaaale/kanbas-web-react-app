import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {AiOutlinePlus} from 'react-icons/ai';
import {FaEllipsisV} from 'react-icons/fa';
import {AiFillCheckCircle} from 'react-icons/ai';

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div>
      <div className="container-assignments">
                    <div className="course-container-header-buttons">
                        <div className="float-start">
                            <input
                                style={{
                                    boxShadow: 'none',
                                    color: 'rgb(45, 59, 69)',
                                    fontSize: '14px',
                                    padding: '8px 12px',
                                    fontFamily:
                                        "'Lato Extended', Lato, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                                }}
                                className="form-group"
                                placeholder="Search for Assignment"
                            />
                        </div>
                        <div className="float-end">
                            <button className="btn btn-secondary">
                                <AiOutlinePlus/>
                                <i className="fa fa-plus fa-1x"></i>
                                Group
                            </button>
                            <button className="btn btn-danger">
                              <AiOutlinePlus/>
                                <i className="fa fa-plus fa-1x"></i>
                                Assignment
                            </button>
                            <button className="btn btn-secondary" id="edit-assignment-dates">
                                <FaEllipsisV style={{color: "#677179"}}/>
                                <i style={{ color: '#677179' }} className="fa fa-ellipsis-v"></i>
                            </button>
                        </div>
                    </div>
                    <br />
                    <hr />
                </div>
      <div className="list-group" style={{width: "98%"}}>
        <ul className="list-group-item-secondary px-3 pe-3 py-2" style={{marginBottom: "0", borderLeftColor: "green"}}>
          <b> Assignments</b>
          <button style={{ float: 'right' }} className="btn">
              <i className="fa fa-ellipsis-v fa-1x module-title-icon p-0"></i>
          </button>
          <button style={{ float: 'right' }} className="btn">
              <i className="fa fa-plus fa-1x module-title-icon p-0"></i>
          </button>
          <span className="badge bg-pill bg-light float-end">40% of Total</span>
        </ul>
        {courseAssignments.map((assignment) => (
          <div> 
                        <li style={{borderLeftColor: "green", borderLeftWidth: "4px"}}className="list-group-item rounded-0">
                            <Link
                            key={assignment._id}
                            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                            {assignment.title}
                            </Link>
                            <br />
                            <i
                                style={{ color: 'green', float: 'left', marginLeft: '-36px' }}
                                className="fa fa-pen-square fa-2x"
                            ></i>
                            Week 0 - SETUP - Week starting on Monday September 5th (9/5/2022) Module |
                            <div className="assignment-item-icons pt-2">
                              <FaEllipsisV style={{float: 'right', color: "#677179"}}/>
                              <AiFillCheckCircle style={{float: 'right', color: 'green'}}/>
                                <i
                                    style={{ float: 'right', color: '#677179' }}
                                    className="fa fa-ellipsis-v module-item-icon"
                                ></i>
                                <i
                                    style={{ float: 'right', color: 'green' }}
                                    className="fa fa-check-circle module-item-icon"
                                ></i>
                            </div>
                            <br />
                            <b> Due</b> Sep 18, 2022 at 11:59 pm | 100 pts
                        </li>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Assignments;
