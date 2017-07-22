import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAbout } from '../actions/getAbout';
import ScrollableAnchor from 'react-scrollable-anchor';
import AboutTile from '../components/AboutTile';

class AboutUsContainer extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchAbout();
  }

  render(){
    return(
      <div className="about-us-section">
        <ScrollableAnchor id={"about"}>
          <div className="about-anchor">
          </div>
        </ScrollableAnchor>
        <AboutTile
          about={this.props.about[0]}
        />
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    about: state.about
  }
}

let mapDispatchToProps = dispatch => {
  return {
    fetchAbout: () => {
      dispatch(fetchAbout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutUsContainer);
