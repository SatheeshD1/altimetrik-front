import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../redux/helpers';
import { alertActions } from '../redux/actions';
import { PrivateRoute } from '../components';
import { DashboardPage } from '../components/DashboardPage';
import { LoginPage } from '../components/LoginPage';
import { SignupPage } from '../components/SignupPage';

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div style={{backgroundColor:"white"}} className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <Switch>
                                <PrivateRoute exact path="/" component={DashboardPage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/signup" component={SignupPage} />
                                <Redirect from="*" to="/" />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };