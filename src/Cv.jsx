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
          <h1 className="introHeader">My Background</h1>
          <p>
            This is where I come from. Some of the places that made me into the creative coder that I am.
            Although this does not mention the time I started my own dog training company called Dogparty.
            Nor does it talk about my experience as a customer relations coordinator at one of Sweden's
            biggest retailers.
          </p>
          <h4>Maybe we can grab a Fika and talk about that?</h4>
        </div>

        <div className="ui stackable four column grid">{cvList}</div>
      </div>
    );
  }
}
export default Cv;