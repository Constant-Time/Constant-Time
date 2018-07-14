import React from 'react';
import NewStoriesStory from './NewStoriesStory.jsx';
const NewStories = (props) => (
  <div className="row py-4 px-4">
      <div className="container">
      <div className="card newStoryCard">
        <div className="card-header text-center py-2 bg-danger text-white text-align-bottom" >
          <h3>More Stories</h3>
        </div>
        {props.isLoggedIn ? <button className="btn-outline-danger m-2" data-toggle="modal" data-target="#NewStoryModal">Add New Story</button> :
        <div className="text-center">



  <button className="btn btn-outline-danger m-2" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Add New Story
  </button>
<div className="collapse" id="collapseExample">
  <div className="alert alert-danger" role="alert">
    Must be logged in to add a new story.
  </div>
</div>



        </div>}
        <div className="card card-body currentStoryBody">
        <ul className="list-group list-group-flush">
          {props.stories.map((story, index) => <NewStoriesStory story={story} key={index} handleTitleClick={props.handleTitleClick}/>)}
        </ul>
      </div>
      </div>
    </div>
  </div>
)

export default NewStories
