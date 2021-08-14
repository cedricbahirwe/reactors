import React from 'react';
import './Content.css';
import data from './data';
import Content from './Content';
import Header from './Header';

class Panel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            searchFilter: '',
            activities: []
        }
    }

    onComponentRefresh() { this.setState({ loading: false }); }

    handleSearch(val) {
        this.setState({
            searchFilter: val,
            loading: true
        });
    }

    render() {
        const { loading } = this.state;

        return (
            <div>
                <Header
                    onSearch={this.handleSearch.bind(this)}
                    title="Github activity" />
                <Content
                    requestRefresh={loading}
                    onComponentRefresh={this.onComponentRefresh.bind(this)}
                    fetchData={this.updateData.bind(this)} />
            </div>
        )
    }
}

export default Panel;