import './App.css';
import AllReadBooksPage from './components/all-read-books-page/allReadBooksPage';
import LandingPage from './components/landing-page/landingPage';
import AllTBRBooksPage from './components/all-TBR-books-page/allTBRBooksPage';
import ReviewPage from './components/read-book-page/reviewPage';
import Error from './components/global-component/error';
import loadingImg from './components/images/Ball-1s-200px.svg'


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
      authorsOrigin,
      yearOfPublication,
      numberOfPages,
      genre,
      whoDecidedToReadThis,
      description{
        json
      }
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
      youMightAlsoLikeCollection (limit: 20) {
        items {
         ...on Books {
          title,
          author,
          grade,
          slug,
          bookCover {
            url
          }
        }
       }
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
    `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACE_ID}`,
    {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,

    },
    body: JSON.stringify({ query }),
    }
    )
    .then(response => response.json())
    .then((json) => setData(json.data));   
    }, [])

    if (!data) return <span>
    <div className="Loading">
    <img src={loadingImg} alt="An orange ball jumping up and down" />
      <h1>Loading</h1>
    </div>
  </span>

  console.log(data)

    
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

                <Route path="/book/:id" render={({match})=> <ReviewPage bookBoxData={bookBoxData} key={match.params.id  || ''} />}> 
                  {/* <ReviewPage bookBoxData={bookBoxData}/> */}
                </Route>

                <Route component={Error} />
                
              </Switch>
            </div>
          </Router>
        );
  }

export default App;
