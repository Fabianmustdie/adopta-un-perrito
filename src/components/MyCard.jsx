import React from "react";
import Card from "react-bootstrap/Card";
import Tags from "./Tags";

const MyCard = ({ image, name, desc, tag, colorTag }) => {
  return (
    <Card style={{ width: "17rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        {tag && colorTag && <Tags colorTag={colorTag} tag={tag} />}
      </Card.Body>
    </Card>
  );
};

export default MyCard;
