import {Link, Outlet, Router, Route, Routes} from "react-router-dom"
import Login from "./pages/Login";


function App() {
  const appStyle = {
    backgroundImage: 'url("https://cdn.mos.cms.futurecdn.net/HixjyeXYJCrSDVGkZTmprP.jpg")',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  }
  return (
  
    <div className="App" style={appStyle}>
      <Outlet/>
        <Routes>
          <Route path="/" element={<Login/>}/>
        </Routes>
      
    </div>
 
  
  );
}

export default App;