import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectAnchor, showNav, hideNav } from '../actions/selectAnchor';
import { configureAnchors } from 'react-scrollable-anchor';
import AnchorLink from '../components/AnchorLink';

class NavBar extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let anchorLinks;
    document.addEventListener('scroll', () => {
      let scrollPosition = document.body.scrollTop
      if (scrollPosition > (window.innerHeight / 1.25)) {
        this.props.showNav()
    } else {
        this.props.hideNav()
    }})

    document.addEventListener('scroll', () => {
      let scrollPosition = document.body.scrollTop
      let offset = window.innerHeight * .25
      let eventsBreakpoint = document.getElementsByClassName('events-section')[0].offsetTop - offset
      let aboutBreakpoint = document.getElementsByClassName('about-text')[0].offsetTop - offset
      let productBreakpoint = document.getElementsByClassName('products-section')[0].offsetTop - offset
      let contactBreakpoint = document.getElementsByClassName('contact-anchor')[0].offsetTop - offset

      if(scrollPosition > eventsBreakpoint && scrollPosition < aboutBreakpoint){
        this.props.selectAnchor(2) 
      } else if (scrollPosition > aboutBreakpoint && scrollPosition < productBreakpoint){
        this.props.selectAnchor(3) 
      } else if (scrollPosition > productBreakpoint && scrollPosition < contactBreakpoint){
        this.props.selectAnchor(4) 
      } else if (scrollPosition > contactBreakpoint){
        this.props.selectAnchor(5) 
      }
    })

    if (this.props.showNavState) {
      anchorLinks = this.props.links.map(link => {
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
          />
        )
      })
    }

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
    selectedAnchorId: state.selectedAnchorId.selectedAnchorId,
    showNavState: state.selectedAnchorId.showNav
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
