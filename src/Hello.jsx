import React, { createFactory } from "react";

const Hello = () => {
  return (
    <div className="ui main container">
      <div class="helloColumn">
        <div class="column">
          <h1 className="introHeader">Banana!</h1>
          <p>
            I am a marketing coordinator turned fullstack developer, with my heart still with the 
            customer and their experiences. With that i mind I'm determined to build platforms, apps and websites
            with the right focus - our users. Have a look at my portfolio and give me a shout out should you have any questions.
            <br></br><br></br><br></br>
            <img class="ui medium circular image" src="src/images/Profile/karroavatar1.png"></img>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hello;