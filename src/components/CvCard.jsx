import React from "react";

const CvCard = ({ workplace }) => {
  return (
    <>
      <div class="ui centered card">
        <div class="image">
          <img src={workplace.image} />
        </div>
        <div class="content">
          <div class="header">{workplace.name}</div>
          <div class="meta">Friend</div>
          <div class="description">{workplace.description}</div>
        </div>
        <div class="extra content">
          <a>
            <i aria-hidden="true" class="user icon">{workplace.year}</i></a>
        </div>
      </div>
    </>
  );
};

export default CvCard;