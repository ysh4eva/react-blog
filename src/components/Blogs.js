import React from "react";
import {
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import Badge from "./Badge";
import "./blog.css";

const Blogs = ({
  title,
  category,
  description,
  id,
  imageUrl,
  excerpt,
  handleDelete,
}) => {
  return (
    <div className="blog" style={{ marginBottom: "20px" }}>
      <div className="card" style={{ maxWidth: "22rem", marginLeft: "40px" }}>
        <img
          src={imageUrl}
          alt={title}
          position="top"
          style={{ maxWidth: "100%", height: "190px" }}
        />
        <MDBCardBody>
          <div className="title">{title}</div>
          <div>
            {excerpt(description)}
            <Link to={`/blog/${id}`}>Read More</Link>
          </div>
          <Badge>{category}</Badge>
          <span>
            <MDBBtn
              className="mt-1"
              tag="a"
              color="none"
              onClick={() => handleDelete(id)}
            >
              <MDBIcon
                fas
                icon="trash"
                style={{ color: "#dd4b39" }}
                size="lg"
              />
            </MDBBtn>
            <Link to={`/editBlog/${id}`}>
              <MDBIcon
                fas
                icon="edit"
                style={{ color: "#55acee", marginLeft: "10px" }}
                size="lg"
              />
            </Link>
          </span>
        </MDBCardBody>
      </div>
    </div>
  );
};

export default Blogs;
