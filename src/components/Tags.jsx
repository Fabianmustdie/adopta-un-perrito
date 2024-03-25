import React from "react";
import Badge from "react-bootstrap/Badge";
import "bootstrap/dist/css/bootstrap.min.css";

const Tags = ({ colorTag, tag }) => {
  return (
    <>
      <Badge bg={colorTag}>{tag}</Badge>
    </>
  );
};

export default Tags;
