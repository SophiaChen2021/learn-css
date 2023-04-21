// import logo from './logo.svg';
import './App.css';
import HotelsResultCard from './HotelsResult';

function App() {
  return (
    <div className="App">
      <div className="App-body" >
        <div className='container'>
          <div className='cardList'>
            <HotelsResultCard></HotelsResultCard>
            <HotelsResultCard></HotelsResultCard>
            <HotelsResultCard></HotelsResultCard>
            <HotelsResultCard></HotelsResultCard>
          </div>         
        </div>
      </div>
    </div>
  );
}

export default App;
