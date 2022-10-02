// ROUTER
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// CONTEXT
import { FormDataProvider } from 'context/FormDataContext';
// COMPONENTS
import Layout from 'components/Layout';
import Result from 'pages/Result';
import Spinner from 'components/Spinner';
// PAGES
import Support from 'pages/Support';
// REACT
import { Suspense } from 'react';

const App = (): JSX.Element => (
  <FormDataProvider>
    <Suspense fallback={<Spinner />}>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Support />} />
            <Route path='/result' element={<Result />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </Suspense>
  </FormDataProvider>
);

export default App;
