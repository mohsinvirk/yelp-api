import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import { withStyles } from '@material-ui/core/styles';

import { getBusinesses } from '../../store/actions';

const styles = {
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        height: 50
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
};

class Search extends Component {
    state = {
        value: '',
        latitude: '37.786882',
        longitude: '122.399972'
    }

    componentDidMount() {
        this.showPosition();
    }

    showPosition = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const {
                        latitude,
                        longitude
                    } = position.coords;

                    this.setState({
                        latitude,
                        longitude
                    });
                }
            );
        } else{
            alert("Sorry, your browser does not support HTML5 geolocation.");
        }
    }

    handleChange = event => {
        const {
            value
        } = event.target;

        this.setState({
            value
        });
    }

    handleIconClick = () => {
        const {
            value,
            latitude,
            longitude
        } = this.state;

        const {
            dispatch
        } = this.props;

        const term = value.split(" ").join('-');

        dispatch(getBusinesses(term ));
    }

    render() {
        const {
            iconButton,
            input,
            root
        } = this.props.classes;

        const {
            error,
            value
        } = this.state;

        return (
            <Paper className={ root }
                elevation={ 1 }
            >
                <InputBase autoFocus
                    className={ input }
                    error={ error }
                    name="search"
                    onChange={ this.handleChange }
                    placeholder="Search Businesses Near You"
                    type="text"
                    value={ value }
                />

                <IconButton aria-label="Search"
                    className={ iconButton }
                    onClick={ this.handleIconClick }
                >
                    <SearchIcon />
                </IconButton>
            </Paper>
        );
    }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect()(withStyles(styles)(Search));
