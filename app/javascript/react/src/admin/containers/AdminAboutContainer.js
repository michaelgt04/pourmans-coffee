import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAbout } from '../../sharedResources/actions/getAbout';
import AboutTile from '../components/AboutTile';

class AdminAboutContainer extends Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAbout();
  }

  render(){
    return(
      <div>
        <h1>{`About Us:`}</h1>
        <AboutTile
          about={this.props.about}
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminAboutContainer);
