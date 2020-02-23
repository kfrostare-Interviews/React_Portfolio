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
          <h1 className="introHeader">Friends and colleagues</h1>
          <p>
            They say true friends are the ones who talk shit to your face 
            and complements you behind your back. Well I forced my former colleagues 
            to dish about some things they say when I'm not around and here are some 
            of their stories.
          </p>
          <h4>
            Be sure to click the links for more reviews!
          </h4>
        </div>

        <div className="ui stackable four column grid">{reviewList}</div>
      </div>
    );
  }
}
export default Reviews;