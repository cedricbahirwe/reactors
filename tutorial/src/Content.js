import React from 'react';
import './Content.css';
import './styles.css'
import data from './data';
import ActivityItem from './ActivityItem';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activities: [],
            loading: false // <~ set loading to false
        };
    }

    componentWillMount() {
        this.updateData();
    }

    componentWillReceiveProps(nextProps) {
        // Check to see if the requestRefresh prop has changed
        if (nextProps.requestRefresh === true) {
            this.setState({ loading: true }, this.updateData);
        }
    }

    // Call out to github data and refresh directory
    updateData() {
        this.setState(
            {
                loading: false,
                activities: data.sort(() => 0.5 - Math.random()).slice(0, 4)
            },
            this.props.onComponentRefresh
        );
    }

    render() {
        const { loading, activities } = this.state; // ES6 destructuring

        return (
            <div className="content">
                <div className="line" />
                {/* Show loading message if loading */}
                {loading && <div>Loading</div>}
                {/* Timeline item */}
                {activities.map(activity => (
                    <ActivityItem key={activity.id} activity={activity} />
                ))}
            </div>
        );
    }
}

export default Content;