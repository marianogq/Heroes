import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRouters } from './DashboardRouters';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={LoginScreen} />
                    <Route path="/" component={DashboardRouters} />
                </Switch>
            </div>
        </Router>
    )
}
