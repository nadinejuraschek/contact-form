// REACT
import React, { Suspense } from 'react';

// ROUTER
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// COMPONENTS
import Layout from 'components/Layout';
import Spinner from 'components/Spinner';

// PAGES
import Support from 'pages/Support';
import Result from 'pages/Result';

const App: React.FC = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Layout>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Support />
            </Route>
            <Route exact path='/result'>
              <Result />
            </Route>
          </Switch>
        </BrowserRouter>
      </Layout>
    </Suspense>
  );
};

export default App;
