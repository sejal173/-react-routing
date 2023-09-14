import ReactDOM from 'react-dom/client';
//  import Navbar from './components/Navbar/Navbar';
//  import Button from './components/Button/Button';
import Home from './view/Home/Home';
 import About from './view/About/About';
 import Contact from './view/Contact/Contact';



const root = ReactDOM.createRoot(document.getElementById('root'));

function App(){
  const path = window.location.pathname

  switch(path){
    case"/Home":
    return <Home/>
    case"/Contact":
    return <Contact/>
    case"/About":
    return <About/>
    default:
    return <h1>Error pls check path</h1>

  }
}
root.render(
  <>
      {/* <h1>react routing</h1> */}
      {/* <Navbar text=""/>
      <Button/> */}
      {/* <Home/> */}
      {/* <About/> */}
      {/* <Contact/> */}
      <App/>
  </>
);

