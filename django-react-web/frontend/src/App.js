// import dependencies
import * as React from 'react';
import { } from 'semantic-ui-react';

// style sheets
import './App.css';

// import custom components
import AppFooter from './modules/Layout/AppFooter';
import AppHeader from './modules/Layout/AppHeader';
import AppRouter from './modules/Router/AppRouter';
import RootContainer from './RootContainer';
import { Provider, observer } from 'mobx-react';
import RootStore from './RootStore';

@observer
export default class App extends React.Component {

    componentWillMount() {
        RootStore.verifyToken();
    }

    componentWillUpdate(nextProps, nextState) {
        RootStore.verifyToken();
    }

    render() {
        return (
            <Provider rootStore={RootStore}>
                <RootContainer />
            </Provider>
        );
    }

}
