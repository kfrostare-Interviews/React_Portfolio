import React, { Component } from "react";
import axios from "axios";
import CvCard from "./components/CvCard";

class Cv extends Component {
  state = {
    cv: []
  };

  componentDidMount() {
    axios.get("./src/data/workplaces.json").then(response => {
        this.setState({
          cv: response.data
        });
    });
  }

  render() {
    const cv = this.state.cv;
    let cvList;

    if (cv.length > 0) {
      cvList = cv.map(workplace => {
        return (
          <div id={"cvCards-" + workplace.id} key={workplace.id}>
            <CvCard workplace={workplace} />
          </div>
        );
      });
    }

    return (
      <div className="ui main container" id="myWorkplaces">
        <div className="myWorkplacesColumn">
          <h1 className="introHeader">My Workplaces</h1>
          <p>
            Please have a look around and let me know if you have any questions.
          </p>
        </div>

        <div className="ui stackable four column grid">{cvList}</div>
      </div>
    );
  }
}
export default Cv;