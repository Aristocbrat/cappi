
import './App.css';
import BasicExample from './components/Navbar';
import Body1 from './components/Body1';
import Body2 from './components/Body2';
import Body3 from './components/Body3';
import Body4 from './components/Body4';
import Body5 from './components/Body5';
import Body6 from './components/Body6';
import Body7 from './components/Body7';


function App() {
  return (
    <div className="body">
     <BasicExample/>
     <Body1/>
     <Body2/>
     <Body3/>
     <Body4/>
     <Body5/>
     <Body6/>
     <div className='footer'> 
     <Body7/>
     </div>
    </div>
  );
}

export default App;
