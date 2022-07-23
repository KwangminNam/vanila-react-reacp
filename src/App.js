import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Daylist from './components/Daylist';
import Day from './components/Day';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Daylist></Daylist>
      <Day/>
    </div>
  );
}

export default App;
