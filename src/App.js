import './App.css';
import Dashboard from './containers/Dashboard/Dashboard';
import LoginProvider from './contexts/LoginContext';
import SuperherosProvider from './contexts/SuperherosContext';

function App() {
  return (
    <LoginProvider>
      <SuperherosProvider>
        <Dashboard />
      </SuperherosProvider>
    </LoginProvider>
  );
}

export default App;
