import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchInstaFeed } from '../actions/getInstaFeed';
import ScrollableAnchor from 'react-scrollable-anchor';
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
        <ScrollableAnchor id={"instagram"}>
          <div className="instagram-anchor">
          </div>
        </ScrollableAnchor>
        <div className="row">
          <h2 className='insta-header'>Like what you see? Follow us!</h2>
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
