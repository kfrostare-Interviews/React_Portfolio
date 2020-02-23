import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <>
      <div class="ui stackable card">
        <div class="image">
          <img src={review.image} />
        </div>
        <div class="content">
          <h3 class="ui header">{review.name}</h3>
          <div class="meta">{review.meta}</div>
          <br></br><br></br>
          <div class="description">{review.description}</div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
