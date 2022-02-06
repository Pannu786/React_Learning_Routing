import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllQuotes from './pages/AllQuotes';
import NewQuotes from './pages/NewQuotes';
import NoFound from './pages/NoFound';
import QuotesDetail from './pages/QuotesDetail';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='quotes' />
        </Route>
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>
        <Route path='/quotes/:quoteId'>
          <QuotesDetail />
        </Route>
        <Route path='/new-quotes'>
          <NewQuotes />
        </Route>
        <Route path='*'>
          <NoFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
