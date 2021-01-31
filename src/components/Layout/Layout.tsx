import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
  className: string;
}

const Layout: React.FC<Props> = ({
  title = "Title",
  description = "Description",
  className,
  children,
}) => {
  const url =
    "https://static.wixstatic.com/media/553d6a_6c7304f930724f46a47a88893ae7bb59~mv2.png/v1/fill/w_120,h_120,al_c,q_85,usm_4.00_1.00_0.00/Logo%20(20).webp";

  return (
    <div style={{ height: "100vh" }}>
      <div className="logo">
        <img
          className="avatar"
          alt="logo"
          src={url}
          style={{ position: "relative", left: "26px", top: "24px" }}
        />{" "}
      </div>
      <br />
      <br />
      <br />
      <h2 className="lead">{title}</h2>
      <p className="lead">{description}</p>
      <div className={className}>{children}</div>
    </div>
  );
};

export default Layout;
