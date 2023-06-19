

import './App.css';
import Cards from './components/Cards';
import './index.css';
import Home from './pages/Home';

function App() {

  return (
    <div className="">
    <Home/>
   <div className="flex justify-around flex-wrap container mx-auto w-full">
    <Cards/>
    <Cards/>
    </div>
    </div>
  );
}

export default App;
