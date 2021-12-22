import './App.css';
import Dashboard from './containers/Dashboard/Dashboard';
import LoginProvider from './contexts/LoginContext';
import TeamProvider from './contexts/TeamContext';

function App() {
  return (
    <LoginProvider>
      <TeamProvider>
        <Dashboard />
      </TeamProvider>
    </LoginProvider>
  );
}

export default App;
