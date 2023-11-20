import {Link, Outlet} from "react-router-dom"

function App() {
  const appStyle = {
    backgroundImage: 'url("https://cdn.mos.cms.futurecdn.net/HixjyeXYJCrSDVGkZTmprP.jpg")',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  }
  return (
    <div className="App" style={appStyle}>
      <Outlet/>
    </div>
  );
}

export default App;