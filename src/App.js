import './App.css';
import Header from './components/Header';
import Daylist from './components/Daylist';
import Day from './components/Day.tsx';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import EmptyPage from './components/EmptyPage';
import CreateWord from './components/CreateWord';
import CreateDay from './components/CreateDay';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Daylist/>}/>
        <Route path="/day/:day" element={<Day/>}/>
        <Route path="/create_word" element={<CreateWord/>}/>
        <Route path="/create_day" element={<CreateDay/>}/>
        <Route path='*' element={<EmptyPage></EmptyPage>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
