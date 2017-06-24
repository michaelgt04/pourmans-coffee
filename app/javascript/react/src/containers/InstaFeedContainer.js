import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchInstaFeed } from '../actions/getInstaFeed';
import InstaFeed from '../components/InstaFeed';

class InstaFeedContainer extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchInstaFeed();
  }

  render(){
    return(
      <InstaFeed />
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
