import logo from './logo.svg';
import './App.css';
import Navigation from './components/body/navigation/navigation';
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Body from "./components/body/body"
import Link from "./components/body/route"
import Jamin from "./components/body/jamin"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Switch } from "react-router";
import cors from 'cors';
import { Loader, Placeholder } from 'rsuite';
function App() {
  return (
    <>
      <Header />
      <div className='main_flex'>
      // <Navigation />
      <Loader color='#000000'/>
      <Routes>
         <Route exact path="/" element={<Link/>}  />
         <Route exact path="/jamin/:name" element={<Jamin/>} />
      </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
