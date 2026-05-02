import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavBar from './layout/navBar/NavBar';
import Users from './pages/Users/Users';
import DashBord from './pages/DashBord/DashBord';
import NotFound from './pages/NotFound/NotFound';
import SideBar from './layout/SideBar/SideBar';


function App() {
  const sideBarStyle = {
    width: "20%"
  };

  const mainStyle = {
    width: "80%"
  };

  return (
    <BrowserRouter>
      <NavBar />
      <div className="d-flex"> 
        <aside style={sideBarStyle} className="border-end">
          <SideBar />
        </aside>
        
        <main style={mainStyle} className="p-4">
          <Routes>
            <Route index element={<DashBord />} />
            <Route path="/users" element={<Users />} />
            <Route path="/dashbord" element={<DashBord />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;
