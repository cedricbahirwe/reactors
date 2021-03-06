import React from 'react';
import './Content.css';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="menuIcon">
                    <div className="dashTop"></div>
                    <div className="dashBottom"></div>
                    <div className="circle"></div>
                </div>

                <span className="title">{this.props.title}</span>

                <input
                    type="text"
                    className="searchInput"
                    placeholder="Search ..."
                />

                <div className="fa fa-search searchIcon"></div>
            </div>
        );
    }
}

Header.defaultProps = {
    title: 'No title',
    age: 33
}
export default Header;