import React, { Component } from "react";
import { connect } from "react-redux";

import CircularProgress from '@material-ui/core/CircularProgress';

import BusinessCard from './Components/BusinessCard';
import Search from "./Components/Search";

import "./App.css";

class App extends Component {
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        const {
            businesses,
            error,
            errorMessage,
            isLoading
        } = this.props;
        const renderBusinesses = businesses.map(item =>{
            const {
                display_phone,
                id,
                image_url,
                location,
                name,
            } = item;

            const {
                display_address
            } = location;

            const address = `${ display_address[0] }, ${ display_address[1] }`;

            return (
                <BusinessCard address={ address }
                    display_phone={ display_phone }
                    image_url={ image_url }
                    key={ id }
                    name={ name }
                />
            )
        })
        return (
            <div className="App">
                <header className="App-header">
                    <Search />
                </header>
                <div className="App-content">
                {
                    isLoading &&
                        <CircularProgress />
                }

                {
                    (!isLoading || !error)
                    ? renderBusinesses
                    : errorMessage
                }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {
        businesses,
        error,
        errorMessage,
        isLoading
    } = state;

    return {
        businesses,
        error,
        errorMessage,
        isLoading
    }
}

export default connect(mapStateToProps)(App);
