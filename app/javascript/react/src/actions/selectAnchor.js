export const SELECT_ANCHOR = 'SELECT_ANCHOR';

export const selectAnchor = selectedAnchorId => {
  return {
    type: SELECT_ANCHOR,
    selectedAnchorId
  }
}
