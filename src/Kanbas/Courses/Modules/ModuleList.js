import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import {AiOutlinePlus} from 'react-icons/ai';
import {FaEllipsisV} from 'react-icons/fa';
import {AiFillCheckCircle} from 'react-icons/ai';

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group">
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          
          <ul key={index} className="module list-group">
            <li className="list-group-item-secondary px-3 pe-3 py-2">
                {module.name}
                <button style={{ float: 'right' }} className="btn">
                    <FaEllipsisV/>
                    <i className="fa fa-ellipsis-v fa-1x module-title-icon p-0"></i>
                </button>
                <button style={{ float: 'right' }} className="btn">
                    <AiOutlinePlus/>
                    <i className="fa fa-plus fa-1x module-title-icon p-0"></i>
                </button>
            </li>
            <ul className="list-group">
                <li className="list-group-item">{module.description}
                
                <FaEllipsisV style={{fontSize: '.7em', float: 'right', color: "#677179"}}/>
                            <AiFillCheckCircle style={{fontSize: '.7em', float: 'right', color: "green"}}/></li>
                <ul className="list-group">
                      {module.lessons &&
                      module.lessons.map((lesson, index) => (
                        <li style={{paddingLeft: "40px"}}className="list-group-item" key={index}>
                          <h4>{lesson.name}</h4>
                          <p>{lesson.description}</p>
                          
                        </li>
                      ))}
                        <div className="container-module-item-icons pt-2">
                            <i style={{ float: 'right', color: '#677179' }} className="fa fa-ellipsis-v module-item-icon"></i>
                            <i style={{ float: 'right', color: 'green' }} className="fa fa-check-circle module-item-icon"></i>
                        </div>
                </ul>
            </ul>
            </ul>
          
        ))}
    </ul>
  );
}
export default ModuleList;
