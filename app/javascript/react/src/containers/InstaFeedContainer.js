import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchInstaFeed } from '../actions/getInstaFeed';
import PhotoTile from '../components/PhotoTile';

class InstaFeedContainer extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchInstaFeed();
  }

  render(){
    let photos = this.props.instaFeed.map(photo => {
      return(
        <PhotoTile
          key={photo.id}
          photo={photo}
        />
      )
    })

    return(
      <div className="instagram">
        <div className="row">
          {photos}
        </div>
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    instaFeed: state.instagram
  }
}

let mapDispatchToProps = dispatch => {
  return {
    fetchInstaFeed: () => {
      dispatch(fetchInstaFeed())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(InstaFeedContainer);
