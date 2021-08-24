import './App.css';
import AllReadBooksPage from './components/all-read-books-page/allReadBooksPage';
import LandingPage from './components/landing-page/landingPage';
import AllTBRBooksPage from './components/all-TBR-books-page/allTBRBooksPage';
import ReviewPage from './components/read-book-page/reviewPage';
import Error from './components/global-component/error';
import Posts from './components/posts';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";
import React from 'react';
import {useState, useEffect} from "react";
import { client } from './client';


const query = `
{
  booksCollection {
    items {
      title,
      author,
      grade,
      slug,
      read,
      currentlyReading
      
    }
  }
}
`;
// export default function App() {


class App extends React.Component {

  componentDidMount () {
    client.getEntries ()
      .then((response) => {
        console.log(response);
      })
      .catch(console.error)
  }




  render () {
    return (
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
}



export default App;
