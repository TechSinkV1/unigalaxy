import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import AllCourses from './components/AllCourses/AllCourses';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/unigalaxy' element={<Home/>}></Route>
        <Route path='/courses' element={<AllCourses/>}></Route>
        <Route path='/aboutus' element={<AboutUs/>}></Route>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
