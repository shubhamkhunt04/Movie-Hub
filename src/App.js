import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import BottomNav from './components/BottomNav';
import Header from './components/Header/Header';
import Movies from './components/Pages/Movies/Movies';
import Search from './components/Pages/Search/Search';
import Series from './components/Pages/Series/Series';
import Trending from './components/Pages/Trending/Trending';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='app'>
          <Container>
            <Switch>
              <Route exact path='/' component={Trending} />
              <Route exact path='/movies' component={Movies} />
              <Route exact path='/series' component={Series} />
              <Route exact path='/search' component={Search} />
            </Switch>
          </Container>
        </div>
        <BottomNav />
      </BrowserRouter>
    </>
  );
}

export default App;
