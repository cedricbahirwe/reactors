import React from 'react';
import './Content.css';

class Header extends React.Component {
    render() {
        const wrapperStyle = {
            backgroundColor: "rgba(0, 0, 43, 1)"
        };

        const titleStyle = {
            color: "#f5f5f5"
        };

        const menuColor = {
            backgroundColor: "#f5f5f5"
        };
        return (
            <div style={wrapperStyle} className="header">
                <div className="menuIcon">
                    <div className="dashTop" style={menuColor}></div>
                    <div className="dashBottom" style={menuColor}></div>
                    <div className="circle" style={menuColor}></div>
                </div>

                <span className="title" style={titleStyle}>{this.props.title}</span>

                <input
                    type="text"
                    className="searchInput"
                    placeholder="Search ..."
                />

                <div style={titleStyle} className="fa fa-search searchIcon"></div>
            </div>
        );
    }
}

Header.defaultProps = {
    title: 'No title',
    age: 33
}
export default Header;