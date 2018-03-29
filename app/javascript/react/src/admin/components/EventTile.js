import React from 'react';
import styled from 'styled-components';

const EventTile = ({ endTime, getEventForEdit, handleDelete, location, note, startTime }) => {
  const EventTileWrapper = styled.div`
    display: flex;
  `;

  const InformationText = styled.span`
    flex: 1 1 auto;
  `;

  const TileButton = styled.button`
    width: 75px;
    padding: 7px 0;
    background-color: lightgrey;
    margin: 0 5px;

    &:hover {
      background-color: linen;
    }
  `;

  return(
    <EventTileWrapper>
      <InformationText><strong>{location}</strong></InformationText>
      <InformationText>Start Time: {startTime}</InformationText>
      <InformationText>End Time: {endTime}</InformationText>
      <InformationText>Note: {note}</InformationText>
      <TileButton onClick={handleDelete}>Delete</TileButton>
      <TileButton onClick={getEventForEdit}>Edit</TileButton>
    </EventTileWrapper>
  )
}

export default EventTile;
