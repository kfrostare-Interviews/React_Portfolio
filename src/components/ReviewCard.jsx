import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <>
      <div class="ui centered card">
        <div class="image">
          <img src={review.image} />
        </div>
        <div class="content">
          <h3 class="ui header">{review.name}</h3>
          <div class="description">{review.description}</div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
