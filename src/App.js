import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './containers/Dashboard/Dashboard';
import Detail from './containers/Detail/Detail';
import LoginProvider from './contexts/LoginContext';
import TeamProvider from './contexts/TeamContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <LoginProvider>
      <TeamProvider>
        <BrowserRouter>
          <Navbar />
            <Switch>        
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route path="/hero/:heroId">
                <Detail />
              </Route>
            </Switch>
          <Footer />
        </BrowserRouter>
      </TeamProvider>
    </LoginProvider>
  );
}

export default App;
