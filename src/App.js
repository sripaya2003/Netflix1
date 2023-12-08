import './App.css';
import Row from './components/Row';
import request from './request';
import Banner from './components/Banner';
import Nav1 from './components/Nav1';

function App() {
  return (
    <div className="App">
      <Nav1/>
      <Banner title='Netflix Originals' fetchUrl={request.fetchNetflixOriginals}/>
      <Row title='Netflix original' fetchUrl={request.fetchNetflixOriginals}/>
      <Row title='Trending' fetchUrl={request.fetchTrending}/>
      <Row title='Top Rated' fetchUrl={request.fetchTopRated}/>
      <Row title='Action Movie' fetchUrl={request.fetchActionMovie}/>
      <Row title='Comedy Movie' fetchUrl={request.fetchComedyMovie}/>
      <Row title='Horror Movie' fetchUrl={request.fetchHorrorMovie}/>
      <Row title='Romance movie' fetchUrl={request.fetchRomanceMovie}/>
      <Row title='Documentry  movie' fetchUrl={request.fetchDocumentaryMovie}/>
    </div>
  );
  }

export default App;
