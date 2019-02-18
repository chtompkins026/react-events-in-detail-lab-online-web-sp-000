import React from 'react';

export default class DelayedButton extends React.Component{
  
  delayed = (event) => {
    event.persist(); 
  }
}