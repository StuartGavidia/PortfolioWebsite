import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage/HomePage'
import CurrentProjectPage from './pages/CurrentProjectPage/CurrentProjectPage'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Switch>
          <Route exact path="/home">
            <HomePage />
          </Route>
          <Route exact path="/home/:project">
            <CurrentProjectPage />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

/*
"devDependencies": {
        "@types/react-router-dom": "^5.3.3"
      }
*/
