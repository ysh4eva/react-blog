import React from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import "./latestblog.css";

const LatestBlog = ({ imageUrl, title, id }) => {
  return (
    <div>
      <Link to={`/blog/${id}`}>
        <div style={{ maxWidth: "350px", height: "80px" }} className="mt-2">
          <MDBRow className="g-0">
            <MDBCol md="3">
              <img
                src={imageUrl}
                alt={title}
                style={{ height: "80px", width: "80px", borderRadius: "30%" }}
              />
            </MDBCol>
            <MDBCol md="9">
              <div>
                <p className="latest">{title}</p>
              </div>
            </MDBCol>
          </MDBRow>
        </div>
      </Link>
    </div>
  );
};

export default LatestBlog;
