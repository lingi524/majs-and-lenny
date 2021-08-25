import './App.css';
import AllReadBooksPage from './components/all-read-books-page/allReadBooksPage';
import LandingPage from './components/landing-page/landingPage';
import AllTBRBooksPage from './components/all-TBR-books-page/allTBRBooksPage';
import ReviewPage from './components/read-book-page/reviewPage';
import Error from './components/global-component/error';
// import Posts from './components/posts';
import CONFIG from './config';

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
// import { client } from './client';


const query = `
{
  booksCollection {
    items {
      title,
      author,
      grade,
      slug,
      read,
      currentlyReading,
      bookCover {
        title
        description
        contentType
        fileName
        size
        url
        width
        height
      }
      
    }
  }
}
`;

function App() {

  let [data, setData] = useState(null);

  useEffect(() => {
    window
    .fetch(
    `https://graphql.contentful.com/content/v1/spaces/${CONFIG.SPACE_ID}`,
    {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CONFIG.MY_API_TOKEN}`,

    },
    body: JSON.stringify({ query }),
    }
    )
    .then(response => response.json())
    .then((json) => setData(json.data));   
    }, [])

    if (!data) return <span>
    <h1>Loading</h1>
  </span>
    
  const bookBoxData = data.booksCollection.items;


    return (
      <Router>
            <div className="App">
              <Switch>
                
                <Route exact path="/">
                  <LandingPage bookBoxData={bookBoxData}/>
                </Route>

                <Route path="/allreadbooks">
                  <AllReadBooksPage bookBoxData={bookBoxData}/>
                </Route>

                <Route path="/alltbrbooks">
                  <AllTBRBooksPage bookBoxData={bookBoxData} />
                </Route>

                <Route path="/reviewPage"> 
                {/* Add ":slug" in the path later to make the routing go to specifc page */}
                  <ReviewPage bookBoxData={bookBoxData}/>
                </Route>
                <Route component={Error} />
              </Switch>
            </div>
          </Router>
        );
  }

export default App;
