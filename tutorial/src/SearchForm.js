import React from 'react';
import PropTypes from 'prop-types';


class SearchForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchText: ''
        }
    }
    submitForm(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.searchText);
    }
    updateSearchInput(e) {
        const val = e.target.value;
        this.setState({
            searchText: val
        });
    }

    render() {
        const { searchVisible } = this.props;
        let searchClasses = ["searchInput"];

        if (searchVisible) {
            searchClasses.push("active");
        }
        return (
            <form onSubmit={this.submitForm.bind(this)}>
                <input
                    type="text"
                    className={searchClasses.join(' ')}
                    onChange={this.updateSearchInput.bind(this)}
                    placeholder="Search ..."

                />
            </form>
        )
    }
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    searchVisible: PropTypes.bool
}

SearchForm.defaultProps = {
    onSubmit: () => {},
    searchVisible: false
};

export default SearchForm;