import React from 'react';

class Mobilenav extends React.Component {
    render() {
        return (
            <div id="mobile-nav">
                <span id="closebtn" onClick={this.props.onClick}>&times;</span>
                <ul id="mobile-nav-items">
                    <li><a href="#about" onClick={this.props.onClick}>About</a></li>
                    <li><a href="#projects" onClick={this.props.onClick}>Projects</a></li>
                </ul>
            </div>
        );
    }
}
export default Mobilenav;