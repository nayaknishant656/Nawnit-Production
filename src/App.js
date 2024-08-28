import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Navigation from './components/body/navigation/navigation';
import Body from './components/body/body';
import Jamin from './components/body/jamin';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <div className='main_flex'>
        <Navigation />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/jamin/:name" element={<Jamin />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
