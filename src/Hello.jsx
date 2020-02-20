import React, { createFactory } from "react";
import Profilepic from "./Components/Profilepic";

const Hello = () => {
  return (
    <div className="ui main container">
      <div class="helloColumn">
        <div class="column">
          <h1 className="introHeader">Welcome</h1>
          <p>
            I am a marketing coordinator turned fullstack developer, with my heart still stuck with the users. 
            My mind, even when coding, continuously returns to questions like: Who are they? What are they looking for? 
            How can we make them return or reach out? With that i mind I'm determined to build platforms, apps and websites
            with the right focus - our users.<br></br><br></br>
            Have a look at my portfolio and remember that all my contact info is right here should you have any questions.
          </p>
          <p>{ Profilepic }</p>
        </div>
      </div>
    </div>
  );
};

export default Hello;