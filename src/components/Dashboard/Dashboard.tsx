import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Modal from "react-modal";
import "../../styles.css";
import Form from "../Form/Form";
import { HashLink as Link } from "react-router-hash-link";
import { useSelector, useDispatch } from 'react-redux';
import { createEducationInfo, deleteEducationInfo, selectEducation } from "../../features/user/userSlice"
import Card from "../Card/Card";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import "bootstrap/dist/css/bootstrap.min.css";

interface Props {
  user: string;
}

const Dashboard: React.FC<Props> = ({ user }) => {
  // viable states
  const [isOpen, setIsOpen] = useState(false);
  const [details, setDetails] = useState<any>([]);
  const [change, setChange] = useState(false);
  const dispatch = useDispatch();
  const availableEducation = useSelector(selectEducation)

  useEffect(() => {
    items();
  }, [change]);

  const items = () => {
    if (availableEducation) {
      setDetails(JSON.parse(availableEducation || ""));
    }
  };

  // callback to aceess education details from the form
  const getEducationDetails = async (detail: object) => {
    var newArray = [];
    if (typeof window !== undefined) {
      if (availableEducation) {
        newArray = JSON.parse(availableEducation || "");
      }
    }
    newArray.unshift(detail);
    //dispatch an action to create a new education
    dispatch(createEducationInfo(JSON.stringify(newArray)))
    setChange(!change);
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // education purge
  const deleteEducation = (p: any, index: any) => {
    details.map((e: any, i: any) => {
      if (e["uniqueKey"] === p["uniqueKey"]) {
        details.splice(index, 1);
      }
    });
    // dispatch an action to reset localstorage after deletions
    dispatch(deleteEducationInfo(JSON.stringify(details)))

    // restate all
    setChange(!change);
  };

  // showwcase university
  const sidePanel = () => (
    <div className="card mb-5">
      <h4 className="card-header g-font">Showwcase University</h4>
      <ul className="list-group">
        {details.map((ed: any, i: any) => (
          <li className="list-group-item" key={i}>
            <Link
              className="g-font"
              smooth
              key={i}
              to={`/dashboard/#${ed["degree"]}`}
            >
              <span
                style={{ backgroundColor: "yellow" }}
              >{`${ed["start"]} to ${ed["end"]}`}</span>
              <br />
              {`${ed["degree"]} | ${ed["name"]}`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  // go to home
  const goBack = (
    <div className="col-sm-12 mb-3">
      <Link to="/" className="text-success">
        <i className="fas fa-chevron-left"></i> 🏠 Home
      </Link>
    </div>
  );

  // add new education info
  const addNewEducationButton = (
    <div className="col-sm-12 offset-4 mb-5">
      <Fab color="primary" aria-label="add" onClick={toggleModal}>
        <AddIcon />
      </Fab>
    </div>
  );

  // modal
  return (
    <Layout
      className="container-fluid"
      title={`  👏 Welcome to, ${user}'s education page.`}
      description="  ➕ Add education details"
    >
      <div className="row">
        <br />
        <br />
        <br />
        {goBack}
        {addNewEducationButton}
        <div className="col-sm-12 col-md-3">
          {localStorage.getItem("education") && sidePanel()}
        </div>
        <div className="col-sm-12 col-md-6 offset-md-1">
          <Card details={details} deleteEducation={deleteEducation} />
        </div>
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="My modal"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={500}
        >
          <div className="text-center" style={{ fontWeight: "bold" }}>
            🏫 Education Form
          </div>
          <Form
            toggleModal={toggleModal}
            getEducationDetails={getEducationDetails}
          />
        </Modal>
      </div>
    </Layout>
  );
};

export default Dashboard;
