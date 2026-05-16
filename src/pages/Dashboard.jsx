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

function Dashboard() {
  return (
    <>
      <Navbar adminName="mohamed"/>
      <div className="d-flex">
        <Sidebar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<StatusPage />} />

            <Route path="/users" element={<Users />}>
              <Route index element={<TableDashbord title="User" />} />
              <Route path="add" element={<FormDashbord />}/>
            </Route>

            <Route path="/projects" element={<Projects />}>
              <Route index element={<TableDashbord title="Project" />} />
              <Route path="add" element={<FormDashbord />}/>
            </Route>

            <Route path="/developers" element={<Developers />}>
              <Route index element={<TableDashbord title="Developer" />} />
              <Route path="add" element={<FormDashbord />}/>
            </Route>
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
