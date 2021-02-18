import logo from './logo.svg';
import './App.css';
import ComponentPage from './components/ComponentPage';
import CounterPage from './components/CounterPage';
import ShowProducts from './components/ShowProducts';
import AdminShowProducts from './components/AdminShowProducts';
import UserEmail from './components/UserEmail';
import UserName from './components/UserName';

function App() {

  return (
    <div className="App">
      <ComponentPage />
      <br />
      <CounterPage />
      <br />
      <ShowProducts />
      <br />
      <AdminShowProducts />
      <br />
      <UserEmail />
      <UserName />
    </div>
  );
}

export default App;
