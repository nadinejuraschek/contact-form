// ROUTER
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// REACT
import React, { Suspense } from 'react';

// CONTEXT
import { FormDataProvider } from 'context/FormDataContext';
// COMPONENTS
import Layout from 'components/Layout';
import Result from 'pages/Result';
import Spinner from 'components/Spinner';
// PAGES
import Support from 'pages/Support';

const App = (): JSX.Element => (
  <FormDataProvider>
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
  </FormDataProvider>
);

export default App;
