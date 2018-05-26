// React
// "View layer" stuff
// If file is exporting a class, first letter is uppercase by covention
// components returns objects or classes, therefore capitalise 1st letter of filename by convention

import React, { Component } from 'react';
// Routing: https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';  // assumes /actions/index.js file

// dummy components for learning / testing
// const Header = ()    => <h2>Header</h2>;
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
// const Dashboard = () => <h2>Dashboard</h2>;
import SurveyNew from './surveys/SurveyNew';

//const Landing = ()   => <h2>Landing</h2>;



// const App = () => {
class App extends Component{
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            // jsx
            <div className = "container">
                {/* BrowserRouter expects to have max ONE child component! */}
                <BrowserRouter className="container"> 
                    <div>
                        {/* <Header /> will always be visible */}
                        <Header />
                        {/* exact === exact ={true}  */}
                        <Route exact path = "/" component = { Landing } />
                        <Route exact path = "/surveys" component = { Dashboard } />
                        <Route path = "/surveys/new" component = { SurveyNew } />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App);