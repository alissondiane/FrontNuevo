import {browserHistory} from 'react-router-3';
import React, { Component } from 'react';
class FooBar extends React.Component {
    handleClick = () => {
        browserHistory.push('/hola');
    };
    render() {
        return (
            <div>
                <h1>Hola Mundo</h1>
                <button onClick={this.handleClick} type="button"/> 
            </div>
        );
      }
}
export default FooBar;