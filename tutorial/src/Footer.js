import React from 'react';
import './Content.css';

class Footer extends React.Component {
    render() {
        return <div className="footer">{this.props.children}</div>;
    }
}

export default Footer;