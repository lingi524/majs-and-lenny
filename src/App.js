import './App.css';
import AllReadBooksPage from './components/all-read-books-page/allReadBooksPage';
import LandingPage from './components/landing-page/landingPage';

function App() {
  return (
    <div className="App">
      <LandingPage /> 
      <AllReadBooksPage />
    </div>
  );
}

export default App;
