import './App.css';
import Header from './components/Header';
import Daylist from './components/Daylist';
import Day from './components/Day';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import EmptyPage from './components/EmptyPage';
import CreateWord from './components/CreateWord';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Daylist/>}/>
        <Route path="/day/:day" element={<Day/>}/>
        <Route path="/create_word" element={<CreateWord/>}/>
        <Route path='*' element={<EmptyPage></EmptyPage>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
