import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { RouteComponentProps, Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import { login, deletUserHistory, selectUserFromLocalStorage } from "../../features/user/userSlice";

// Properties of all interface components
// Properties of all interface components
interface Props extends RouteComponentProps<any> {
  getName: () => void;
}

const Home: React.FC<Props> = ({ getName, history }) => {
  // viable state
  const [name, setName] = useState("");
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();
  const curentUser = useSelector(selectUserFromLocalStorage);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  // state set for variable render cases
  const buttonDisable = () => {
    if (curentUser) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  };

  useEffect(() => {
    buttonDisable();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //dispatch an action to store the current user
    dispatch(login(String(name)))
    getName();
    history.push("/dashboard");
    setDisable(true);
  };

  const handleClick = () => {
    //dispatch an action to delete all user history
    dispatch(deletUserHistory())
    setDisable(false);
  };

  const showForm = () => {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            {disable ? (
              <input
                id="username"
                className="form-control"
                placeholder="Type your name here and click 'enter' below to begin!"
                style={{ display: "none" }}
              />
            ) : (
                <input
                  id="username"
                  className="form-control"
                  value={name}
                  onChange={handleChange}
                  required
                />
              )}
          </div>
          {disable ? (
            <button
              className="btn btn-outline-primary mb-3"
              disabled
              style={{ cursor: "not-allowed", display: "none" }}
            >
              Enter
            </button>
          ) : (
              <button className="btn btn-outline-primary">Enter</button>
            )}
        </form>
        {disable && (
          <div className="row">
            <div className="col">
              <button className="btn btn-outline-success" onClick={handleClick}>
                Not {`${curentUser} ?`}
              </button>
            </div>
            <div className="col text-right">
              <Link to="/dashboard" className="text-success">
                Continue to dashboard <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <Layout
      title=""
      className="container-fluid col-md-6 offset-md-3 font-black"
      description="&nbsp; The World's Tech Community!"
    >
      <h3 style={{ marginBottom: "50px" }}>
        Hi{" "}
        {`${curentUser ? curentUser : ""}`}!
        Welcome to your <span className="typewriter">Education Showcase</span>
      </h3>
      {showForm()}
    </Layout>
  );
};

export default Home;