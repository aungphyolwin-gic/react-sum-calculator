import { useEffect } from 'react';
import './App.css';
import Fruit from './Fruit';
import SimpleCalculator from './SimpleCalculator';

function App() {
  useEffect((e)=>{console.log("render again")},[])
  return (
    <div className="App">
      {/* <div className='center'><Fruit /></div> */}
      <SimpleCalculator />
    </div>
  );
}

export default App;
