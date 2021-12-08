import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MAIN_LAYOUTS_ROUTES from './routesMain';
import ErrorBoundary from 'components/errorBoundary';
import { MainLayout } from 'layouts/mainLayout';
import { Loader } from 'components/loader';

const AppRoutes = () => {
  const [tokenIsSetted, setTokenIsSetted] = useState(true);

  return (
    <Router>
      {tokenIsSetted && (
        <MainLayout>
          <React.Suspense fallback={<Loader />}>
            <ErrorBoundary>
              <Switch>
                {MAIN_LAYOUTS_ROUTES.map(({ path, component: Component, exact }) => (
                  <Route path={path} exact={exact} component={Component} key={path} />
                ))}
              </Switch>
            </ErrorBoundary>
          </React.Suspense>
        </MainLayout>
      )}
    </Router>
  );
};

export default AppRoutes;
