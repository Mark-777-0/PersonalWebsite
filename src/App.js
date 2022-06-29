import Navbar from './components/navbar/navbar.jsx'
import ResponsiveAppBar from './components/navbarRedone/navbarRedone.jsx'
import Sidebar from './components/sidebar/sidebar.jsx'
import Welcome from './components/welcome/welcome.jsx'
import Portfolio from './components/portfolio/portfolio.jsx'
import Work from './components/work/work.jsx'
import Contact from './components/contact/contact.jsx'
import './app.scss'
import {useState} from 'react'

function App() {

  const [menuState,setMenuState] = useState(false)
  
  return (
    <div className="app">
      {/* <Navbar menuState={menuState} setMenuState={setMenuState} /> */}
      <ResponsiveAppBar className='navbar'></ResponsiveAppBar>
      <Sidebar menuState={menuState} setMenuState={setMenuState} />
      <div className="sections">
      <Welcome/>
      <Portfolio id='portfolio-section'/>
      <Work className = 'work' />
      <Contact/>
      </div>
    </div>
  );
}

export default App;
