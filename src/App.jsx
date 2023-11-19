import './App.scss';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './component/Home/Home.jsx';
import Header from './component/Header/Header.jsx';
import MovieDetails from './component/MovieDetails/MovieDetails.jsx';
// import PageNotFound from './component/PageNotFound/PageNotFound.jsx';
import Footer from './component/Footer/Footer.jsx';




function App() {
  return (
      <BrowserRouter>
      <Header/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movie/:imdbID" element={<MovieDetails/>}/>
          {/* <Route element={<PageNotFound/>}/> */}
        </Routes>
      </div>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
