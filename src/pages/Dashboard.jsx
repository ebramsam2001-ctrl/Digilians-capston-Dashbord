import { Route, Routes } from "react-router-dom";
import Footer from "../components/Dashborad/Footer/Footer";
import Navbar from "../components/Dashborad/Navbar/Navbar";
import Sidebar from "../components/Dashborad/Sidebar/Sidebar";
import StatusPage from "./StatusPage";
import Users from "./Users";
import Projects from "./Projects";
import TableDashbord from "../components/UI/TableDashbord/TableDashbord";
import FormDashbord from "../components/UI/FormDashbord/FormDashbord";
import Developers from "./Developers";
import { useState } from "react";

function Dashboard() {

  const [userState, setUserState] = useState(false);
  const [projectState, setProjectState] = useState(false);
  const [developerState, setDeveloperState] = useState(false);
  
  return (
    <>
      <Navbar adminName="mohamed"/>
      <div className="d-flex">
        <Sidebar userState={ userState } projectState={ projectState } developerState={ developerState } />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<StatusPage />} />

            <Route path="/users" element={<Users />}>
              <Route index element={<TableDashbord title="User" />} />
              <Route path="add" element={<FormDashbord changeState={ setUserState } />}/>
            </Route>

            <Route path="/projects" element={<Projects />}>
              <Route index element={<TableDashbord title="Project" />} />
              <Route path="add" element={<FormDashbord changeState={ setProjectState } />}/>
            </Route>

            <Route path="/developers" element={<Developers />}>
              <Route index element={<TableDashbord title="Developer" />} />
              <Route path="add" element={<FormDashbord changeState={ setDeveloperState } />}/>
            </Route>
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
