import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import {AiFillCheckCircle} from 'react-icons/ai';
import { useSelector, useDispatch } from "react-redux";
import { FaEllipsisV } from "react-icons/fa";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  
  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

  const handleUpdateModule = (module) => {
    client.updateModule(module).then((status) => {;
    dispatch(updateModule(module));
    });
  };


  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };


  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <ul className="list-group">
        <li className="list-group-item">
        <div className="row">
          <div className="col-6">
              <input style={{marginBottom: '8px'}}className="form-control" type="text" value={module.name}
              onChange={(e) => 
                dispatch(setModule({ ...module, name: e.target.value }))
              }/>
            <textarea className="form-control" rows="3" value={module.description}
              onChange={(e) => 
                dispatch(setModule({ ...module, description: e.target.value }))
              }/>
          </div>
          <div className="col-3">
            <button className="btn btn-primary float-start" 
              onClick={() => handleUpdateModule(module)}>
              Update
            </button>
            <button style={{marginLeft: '8px'}}className="btn btn-success float-start"
              onClick={handleAddModule}>
              Add
            </button>
          </div>
        </div>
      </li>

      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          
          <ul key={index} className="module list-group">
            <li className="list-group-item-secondary px-3 pe-3 py-2">
                {module.name}
                <button style={{marginLeft: '8px'}} className="btn btn-success float-end"
                  onClick={() => dispatch(setModule(module))}>
                  Edit
                </button>
                <button style={{ float: 'right' }} className="btn btn-danger"
                  onClick={() => handleDeleteModule(module._id)}>
                  Delete
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
