import './App.css'
import Main from './components/main/Main'
import Sidebar from './components/sidebar/Sidebar'
import Transactions from './components/transactions/Transactions'
// import Chart from './components/Chart/Chart'
function App() {
  return (
    <div className="app">
      <Sidebar />
      <Main /> 
      <Transactions />
    </div>
  );
}

export default App;
