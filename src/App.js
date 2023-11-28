import './App.css';
import Row from './Row';
import requests from './request';

function App() {
  return (
    < div className='App'>
<header className='App-header'>
  <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}></Row>
</header>
    </div>
  );
}

export default App;
