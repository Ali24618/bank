import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import First from './bank/first';
import Second from './bank/second';
import Third from './bank/third';
import Fourth from './bank/fourth';
import Sixth from './bank/sixth';
import Seventh from './bank/seventh';
import Eighth from './bank/eighth';
import Ninth from './bank/ninth';
import Usd from './bank/usd';
import Eur from './bank/eur';
import Rub from './bank/rub';
import Theme from './dark/theme';

function App() {
  if(localStorage.getItem('money')==null){
    localStorage.setItem('money',60000);
  }
  if(localStorage.getItem('dolar')==null){
    localStorage.setItem('dolar',0);
  }
  if(localStorage.getItem('euro')==null){
    localStorage.setItem('euro',0);
  }
  if(localStorage.getItem('rubli')==null){
    localStorage.setItem('rubli',0);
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<First/>}/>
        <Route path='/second' element={<Second/>}/>
        <Route path='/third' element={<Third/>}/>
        <Route path='/fourth' element={<Fourth/>}/>
        <Route path='/sixth/:type' element={<Sixth/>}/>
        <Route path='/seventh/:kind/:input' element={<Seventh/>}/>
        <Route path='/eighth/:box' element={<Eighth/>}/>
        <Route path='/ninth' element={<Ninth/>}/>
        <Route path='/usd' element={<Usd/>}/>
        <Route path='/eur' element={<Eur/>}/>
        <Route path='/rub' element={<Rub/>}/>
        <Route path='/theme' element={<Theme/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;