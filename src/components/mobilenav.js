import React from 'react';

class Mobilenav extends React.Component {
    render() {
        return (
            <div id="mobile-nav">
                <span id="closebtn" onClick={this.props.onClick}>&times;</span>
                <ul id="mobile-nav-items">
                    <li><a href="#about" alt="About" onClick={this.props.onClick}>About</a></li>
                    <li><a href="#moreinfo" alt="More Info" onClick={this.props.onClick}>More</a></li>
                </ul>
            </div>
        );
    }
}
export default Mobilenav;