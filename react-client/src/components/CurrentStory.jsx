import React from 'react';
import CurrentStoryMessage from './CurrentStoryMessage.jsx';

class CurrentStory extends React.Component {
  render () {
    var submitButton = this.props.overCharLimit ?
    <button className="btn mt-0 disabled">Submit</button> :
    <button className="btn mt-0" onClick={() => this.props.handleSubmitClick(document.getElementById('addToStoryForm').value)}>Submit</button>
    var loggedInActions = (this.props.messages.length !== 0 && this.props.userName === this.props.messages[this.props.messages.length -1].username) ?
    <div className="alert alert-warning" role="alert">
      Cannot post consecutively on the same story. Try adding to another story!
    </div> :
    <div>
      <form className="addToStory">
        <div className="form-group pt-2">
          <label htmlFor="addToStoryForm">Add To Story:</label>
          <textarea className="form-control" id="addToStoryForm" rows="3" onChange={this.props.handleChange}></textarea>
        </div>
      </form>
      {this.props.overCharLimit &&
        <div className="alert alert-warning mt-0" role="alert">
          Over character limit! Please shorten to submit your message.
        </div>}
      <p className={this.props.overCharLimit ? "overCharLimit" : ""}>Characters Left: {this.props.charsLeft}</p>
      <div className="container">
        <div className="addToStoryButton">
          {submitButton}
        </div>
      </div>
    </div>

    var loggedOutActions =
      <div className="loggedOutActions">
        <div className="alert alert-danger" role="alert">
          Must be logged in to post to a story. Login or sign up with the buttons below!
        </div>
        <div>
          <button className="btn btn-danger mr-2" data-toggle="modal" data-target="#NewSignUpModal">Sign Up</button>
          <button className="btn btn-danger" data-toggle="modal" data-target="#NewLogInModal">Login</button>
        </div>
      </div>

    var favoritesButton =
    !this.props.isLoggedIn ? <button className="btn btn-danger mx-2 my-2 addToFavoritesButton disabled"><i className="fa fa-star"></i> Add to favorites</button> :
    this.props.favorites.indexOf(this.props.currStoryID) > -1 ? <button className="btn btn-danger mx-2 my-2 addToFavoritesBadge favorited"><i className="fa fa-star"></i> Favorited</button>:
    <button className="btn btn-danger mx-2 my-2 addToFavoritesButton" onClick={() => this.props.handleNewFavorite(this.props.userID, this.props.currStoryID)}><i className="fa fa-star"></i> Add to favorites</button>


    return (
      <div className="py-4 px-4">
      <div className="card bg-light currentStoryCard">

        <div className="card-header text-center py-2 currentStoryHeader bg-danger text-white" >
          <h3>{this.props.title}</h3>
        </div>
        <div className="card-body currentStoryBody">
          <div id='testMessage'>
            {this.props.messages.map((message, index) => <CurrentStoryMessage message={message} key={index} />)}
          </div>
          {favoritesButton}
          <button className="btn btn-danger my-2 mx-2 randomStoryButton" onClick={() => this.props.selectRandomStory()}><i className="fas fa-random"></i> Random Story</button>


          <br></br>
          {this.props.isLoggedIn && loggedInActions}
          {!this.props.isLoggedIn && loggedOutActions}
        </div>
      </div>
    </div>
    )
  }
}
export default CurrentStory;

/*
{this.props.isLoggedIn &&
<button className="btn btn-danger mx-2 my-2 addToFavoritesButton" onClick={() => this.props.handleNewFavorite(this.props.userID, this.props.currStoryID)}><i className="fa fa-star"></i> Add to favorites</button>
}
{!this.props.isLoggedIn &&
  <button className="btn btn-danger mx-2 my-2 addToFavoritesButton disabled"><i className="fa fa-star"></i> Add to favorites</button>
}


 {this.props.isLoggedIn &&
          <button className="btn btn-danger mx-2 my-2 addToFavoritesButton"><i className="fa fa-star"></i> Add to favorites</button>
          }
          {!this.props.isLoggedIn &&
            <button className="btn btn-danger mx-2 my-2 addToFavoritesButton disabled"><i className="fa fa-star"></i> Add to favorites</button>
          }
*/
