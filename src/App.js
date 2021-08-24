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
      currentlyReading
      
    }
  }
}
`;
// export default 
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
    console.log(data);
    }, [])

    if (!data) return <span>
    <h1>Nothing to see</h1>
  </span>
    
    const bookBoxData = data.booksCollection.items;

// class App extends React.Component {

//   componentDidMount () {
//     client.getEntries ()
//       .then((response) => {
//         console.log(response);
//       })
//       .catch(console.error)
//   }




  // render () {
    return (
      <Router>
            <div className="App">
              <Switch>
                
                <Route exact path="/">
                  <LandingPage bookBoxData={bookBoxData}/>
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
// }



export default App;
