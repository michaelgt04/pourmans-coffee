export const SELECT_ANCHOR = 'SELECT_ANCHOR';
export const SHOW_NAV = 'SHOW_NAV';
export const HIDE_NAV = 'HIDE_NAV';
export const WINDOW_LOCATION = 'WINDOW_LOCATION';

export const selectAnchor = selectedAnchorId => {
  return {
    type: SELECT_ANCHOR,
    selectedAnchorId
  }
}

export const showNav = () => {
  return {
    type: SHOW_NAV,
    show: true
  }
}

export const hideNav = () => {
  return {
    type: HIDE_NAV,
    show: false
  }
}

export const setWindowLocation = (windowLocation) => {
  return {
    type: WINDOW_LOCATION,
    windowLocation
  }
}
//state initializes with the top positionns of each section
//onScroll dispatches new winow top location
//Navbar checks to see what "range" current window is and sets the selected anchor accordingly
