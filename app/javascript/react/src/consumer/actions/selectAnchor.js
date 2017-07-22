export const SELECT_ANCHOR = 'SELECT_ANCHOR';
export const SHOW_NAV = 'SHOW_NAV';
export const HIDE_NAV = 'HIDE_NAV';

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
