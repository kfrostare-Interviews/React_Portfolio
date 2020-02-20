import React from 'react'

const ReviewCards = ({ review }) => {
   return (
       <>
           <div class="ui card">
               <div class="image">
              <img src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg" />
            </div>
              <div class="content">
              <div class="header">Daniel</div>
              <div class="meta">Joined in 2016</div>
           <div class="description">Daniel is a comedian living in Nashville.</div>
        </div>
      </div>
    </div>
  );
};
    
export default ReviewCards