import './App.css';
import AllReadBooksPage from './components/all-read-books-page/allReadBooksPage';
import LandingPage from './components/landing-page/landingPage';
import AllTBRBooksPage from './components/all-TBR-books-page/allTBRBooksPage';
import ReviewPage from './components/read-book-page/reviewPage';
import Error from './components/global-component/error';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    // <div className="App">
    //   <LandingPage /> 
    //   <AllReadBooksPage />
    // </div>

<Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/allreadbooks">
            <AllReadBooksPage />
          </Route>
          <Route path="/alltbrbooks">
            <AllTBRBooksPage />
          </Route>
          <Route path="/reviewPage"> 
          {/* Add ":slug" in the path later to make the routing go to specifc page */}
            <ReviewPage />
          </Route>
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
}



// export default App;
