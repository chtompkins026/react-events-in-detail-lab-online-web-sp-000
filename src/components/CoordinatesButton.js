import React from 'react';

export default class CoordinatesButton extends React.Component{
  
  f = (event) => {
    this.props.onReceiveCoordinates([event.screenX, event.screenY])
  }
  
  
}