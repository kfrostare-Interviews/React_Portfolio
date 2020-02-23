import React from "react";

const CvCard = ({ workplace }) => {
  return (
    <>
      <div class="ui centered card">
        <div class="image">
          <img src={workplace.image} />
        </div>
        <div class="content">
          <h3 class="ui header">{workplace.name}</h3>
        <div class="description">{workplace.description}</div>
        </div>
      </div>
    </>
  );
};

export default CvCard;