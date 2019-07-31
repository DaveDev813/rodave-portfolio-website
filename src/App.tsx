import React, { ReactElement } from 'react';
import 'typeface-roboto';
import { Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './screens/Home';
import NotFound from './screens/NotFound';
import SignIn from './screens/Signin';
import ProtectedScreen from './screens/ProtectedScreen';
import TestScreen from './screens/TestScreen';

const App: React.FC = (): ReactElement => {
  return (
    <React.Fragment>
      <CssBaseline>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/signin" component={SignIn} />
          <Route exact={true} path="/test" component={TestScreen} />
          <Route
            exact={true}
            path="/authenticated"
            component={ProtectedScreen}
          />
          <Route component={NotFound} />
        </Switch>
      </CssBaseline>
    </React.Fragment>
  );
};

export default App;
