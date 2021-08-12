import './App.css';
import AllReadBooksPage from './components/all-read-books-page/allReadBooksPage';
import LandingPage from './components/landing-page/landingPage';

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
          <Route path="/test">
            <AllReadBooksPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



// export default App;
