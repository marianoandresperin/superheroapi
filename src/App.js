import './App.css';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './containers/Dashboard/Dashboard';
import LoginProvider from './contexts/LoginContext';
import TeamProvider from './contexts/TeamContext';

function App() {
  return (
    <LoginProvider>
      <TeamProvider>
        <Navbar />
        <Dashboard />
      </TeamProvider>
    </LoginProvider>
  );
}

export default App;
