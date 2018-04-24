import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginForm from '../components/LoginForm';
import PlayersList from '../components/PlayersList';

const MainRouter = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login" initial />
                </Scene>

                <Scene key="main">
                    <Scene key="players" component={PlayersList} title="Free Agent Tracker" />
                </Scene>
            </Scene>
        </Router>
    );
};

export default MainRouter;