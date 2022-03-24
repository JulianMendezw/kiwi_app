import './App.scss';
import Dashboard from './components/dashboard/dashboard';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
