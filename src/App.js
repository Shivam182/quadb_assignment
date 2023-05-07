import { Routes ,Route} from 'react-router-dom';
import './App.css';
import DetailShow from './components/DetailShow';
import Home from './layout/Home/Home';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route exact path='/show/:id' Component={DetailShow}/>
    </Routes>
  </div>
  );
}

export default App;
