import '../node_modules/bootstrap/dist/css/bootstrap.min.css' ;
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Login from './components/Auth/Login';
import Home from './components/Dashboard/Home';

import Router from './components/Router';

function App() {
  let session = localStorage('token');

  return (
    <>
      <Router></Router>
    </>
  );
}

export default App;
