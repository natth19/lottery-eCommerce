import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';

function App() {
  return (
    <div className="App">
      <div className="NavbarHeader">
        <Header/>
      </div>
      <div className="PageContent">
        <Home/>
      </div>
      <div className="FooterBarMenu">
        <Footer/>
      </div>     
    </div>
  );
}

export default App;
