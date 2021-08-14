import React from 'react';
import './Content.css';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchVisible: false
        }
    }

    showSearch() {
        this.setState({ searchVisible: !this.state.searchVisible })
    }
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

                <SearchForm
                    searchVisible={this.state.searchVisible}
                    onSubmit={this.props.onSearch}
                />

                <div style={titleStyle}
                    className="fa fa-search searchIcon"
                    onClick={this.showSearch.bind(this)}></div>
            </div>
        );
    }
}

Header.propTypes = {
    onSearch: PropTypes.func
}

Header.defaultProps = {
    title: 'No title',
    age: 33
}
export default Header;