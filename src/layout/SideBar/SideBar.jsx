import { NavLink } from "react-router-dom";
import Style from "./SideBar.module.css"

export default function SideBar() {
    return (
        <>
            <section className={`d-flex flex-column ${Style.sideBarBackground} w-100`}>
                <div>
                    <h4 className={Style.dashBordStyle}>
                        Dashboards
                    </h4>

                    <NavLink
                        to="/users"
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                    >
                        <h4>
                            <i class="bi bi-people-fill"></i> User Management
                        </h4>
                    </NavLink>

                    <NavLink
                        to="/dashbord"
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                    >
                        <h4>
                            <i class="bi bi-building"></i> Projects Management
                        </h4>
                    </NavLink>

                    <h4>
                        <i class="bi bi-building"></i> Developers Management
                    </h4>

                    <h4>
                        <i class="bi bi-globe2"></i> Website CMS
                    </h4>

                    <h4>
                        <i class="bi bi-building"></i> Live Chat
                    </h4>
                </div>
            </section>
        </>
    );
}
