import React from "react";

const CvCard = ({ workplace }) => {
  return (
    <>
      <div class="ui link cards">
        <div class="image">
          <img src={workplace.image} />
        </div>
        <div class="content">
          <h3 class="ui header">{workplace.name}</h3>
          <div class="description">{workplace.description}</div>
          <div class="extra content">
            <div class="right floated">{workplace.year}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CvCard;
