import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import {AiFillCheckCircle} from "react-icons/ai";
import {FaEllipsisV} from "react-icons/fa";

function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="container-assignments">
      <div className="course-container-header-buttons">
            <div className="assignment-published float-end">
                <AiFillCheckCircle style={{color: 'green'}}/>
                <b> Published</b>
                <button className="btn btn-secondary ms-3" id="edit-assignment-dates">
                    <FaEllipsisV style={{color: "#677179"}}/>
                    <i style={{ color: '#677179' }} className="fa fa-ellipsis-v"></i>
                </button>
            </div>
        </div>
        <br />
        <hr />
        <div className="wd-grid-row">
            <div style={{ padding: '10px' }} className="row">
                Assignment Name
                <pre>
      </pre>
            <input value={assignment.title} className="form-control mb-2" />
                
            </div>
        </div>

      <button         style={{float: "right"}}
 onClick={handleSave} className="btn btn-danger me-2">
        Save
      </button>
        <Link
        style={{float: "right"}}
        to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-secondary me-1"
        >
        Cancel
      </Link>
    </div>
  );
}

export default AssignmentEditor;
