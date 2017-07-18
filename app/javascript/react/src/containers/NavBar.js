import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectAnchor, showNav, hideNav, setWindowLocation } from '../actions/selectAnchor';
import { configureAnchors } from 'react-scrollable-anchor';
import AnchorLink from '../components/AnchorLink';

class NavBar extends Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.windowLocation)
    let anchorLinks;
    document.addEventListener('scroll', () => {
      this.props.setWindowLocation(document.body.scrollTop)
      if (document.body.scrollTop > (window.innerHeight / 1.25)) {
        this.props.showNav()
    } else {
        this.props.hideNav()
    }})

    if (this.props.showNavState) {
      anchorLinks = this.props.links.map(link => {
        let handleClick = () => {
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
    }

    return(
      <div className="navbar">
        <ul className="links show-for-large">
          {anchorLinks}
        </ul>
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    selectedAnchorId: state.selectedAnchorId.selectedAnchorId,
    showNavState: state.selectedAnchorId.showNav,
    windowLocation: state.selectedAnchorId.windowLocation
  }
}

let mapDispatchToProps = dispatch => {
  return {
    selectAnchor: (id) => {
      dispatch(selectAnchor(id))
    },
    showNav: () => {
      dispatch(showNav())
    },
    hideNav: () => {
      dispatch(hideNav())
    },
    setWindowLocation: (windowLocation) => {
      dispatch(setWindowLocation(windowLocation))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
