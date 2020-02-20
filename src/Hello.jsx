import React, { createFactory } from "react";

const Hello = () => {
  return (
    <div className="ui main container">
      <div class="helloColumn">
        <div class="column">
          <h1 className="introHeader">Banana!</h1>
          <p>
            Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident
            corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum
            molestias?
          </p>
          <img class="ui medium circular image" src="src/images/Profile/Karro01.jpg"></img>
        </div>
      </div>
    </div>
  );
};

export default Hello;