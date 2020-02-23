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
          <br></br>
          <div class="description">{review.description}</div><br></br>
          <div className="link" onClick="window.open"><a href={review.link}>Read more reviews</a></div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
