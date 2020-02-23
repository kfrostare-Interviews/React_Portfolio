import React, { Component } from "react";
import axios from "axios";
import ReviewCard from "./components/ReviewCard";

class Reviews extends Component {
  state = {
    reviews: []
  };

  componentDidMount() {
    axios.get("./src/data/reviews.json").then(response => {
      this.setState({
        reviews: response.data
      });
    });
  }

  render() {
    const reviews = this.state.reviews;
    let reviewList;

    if (reviews.length > 0) {
      reviewList = reviews.map(review => {
        return (
          <div id={"reviewCard" + review.id} key={review.id}>
            <ReviewCard review={review} />
          </div>
        );
      });
    }

    return (
      <div className="ui main container" id='myReviews'>
        <div className="myReviewsColumn">
          <h1 className="introHeader">Content</h1>
          <p>
            More Content
          </p>
        </div>

        <div className="ui stackable four column grid">{reviewList}</div>
      </div>
    );
  }
}
export default Reviews;