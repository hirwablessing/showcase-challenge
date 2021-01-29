import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Iframe from "react-iframe";

interface Prop {
  details: any;
  deleteEducation: (x: any, y: any) => void;
}

const Card: React.FC<Prop> = ({ details, deleteEducation }) => {
  const handleDelete = (x: any, y: any) => {
    deleteEducation(x, y);
  };

  return (
    <div>
      {details.map((x: any, y: any) => (
        <div className="card mb-5" id={x["name"]} key={y}>
          <h3 className="typewriter">&nbsp; Knowledge empowers you</h3>
          <h4 className="card-header g-font">Info</h4>
          <ul className="list-group">
            <li className="list-group-item g-font">🏫 School: {x["name"]}</li>
            <li className="list-group-item g-font">🎓 Degree: {x["degree"]}</li>
            <li className="list-group-item g-font">
              🌐 E-Learning: {x["elearn"]}
            </li>
            <li className="list-group-item g-font">
              ✔ Field of Study: {x["fos"]}
            </li>
            <li className="list-group-item g-font">
              ⏳ Session: {x["start"]} to {x["end"]}
            </li>
            <li className="list-group-item g-font">💯 Grade: {x["grade"]}</li>
            <li className="list-group-item g-font">
              🗞 Description: {x["description"]}
            </li>
            <li className="list-group-item g-font">
              🎭 Activities: {x["cocur"]}
            </li>
            <li className="list-group-item g-font">
              🎞 Media:{" "}
              <Iframe
                url={x["media"]}
                width="200px"
                height="200px"
                id="media"
              />
            </li>
            <li className="list-group-item">
              <button
                className="btn btn-danger g-font"
                onClick={() => handleDelete(x, y)}
              >
                🗑
              </button>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Card;
