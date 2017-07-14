import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectAnchor } from '../actions/selectAnchor';
import { configureAnchors } from 'react-scrollable-anchor';
import AnchorLink from '../components/AnchorLink';

class NavBar extends Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.selectedAnchorId)
    let anchorLinks = this.props.links.map(link => {
      let handleClick = () => {
        debugger;
        this.props.selectAnchor(link.id)
      }

        let selectedClass;
        if(link.id === this.props.selectedAnchorId){
          selectedClass = "selected"
        }


      return(
        <AnchorLink
          key={link.anchor}
          anchor={link.anchor}
          text={link.text}
          selectedClass={selectedClass}
          handleClick={handleClick}
        />
      )
    })

    return(
      <div className="navbar">
        <ul className="links">
          {anchorLinks}
        </ul>
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    selectedAnchorId: state.selectedAnchorId
  }
}

let mapDispatchToProps = dispatch => {
  return {
    selectAnchor: (id) => {
      dispatch(selectAnchor(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
