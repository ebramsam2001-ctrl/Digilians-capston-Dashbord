import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

export default function Sidebar({ userState, projectState, developerState }) {
    const links = [
        { icon: "users", title: "Status", path: "/" },
        { icon: "chart-bar", title: "User Management", path: "/users", active: userState },
        { icon: "building", title: "Projects Management", path: "/projects", active: projectState },
        { icon: "building", title: "Developers", path: "/developers", active: developerState },
        { icon: "users", title: "Cms", path: "/cms" },
        { icon: "message", title: "Livechat", path: "/livechat" },
    ];

    return (
        <aside className={`min-vh-100 ${styles.aside}`}>
            <div className="fw-semibold px-4 mb-3 fs-4">
                <h4>Dashboard</h4>
            </div>

            <nav className="d-flex flex-column gap-3 mx-3">
                {links.map((item, index) => (
                    <NavLink
                        to={item.path}
                        className={`${styles.navItem} d-flex align-items-center gap-3 text-decoration-none text-reset`}
                        key={index}
                    >
                        <i className={`fa-solid fa-${item.icon} fs-4`}></i>
                        <span>{item.title}</span>
                        {item.active && (
                            <span className="bg-warning px-2 py-1 rounded text-dark">
                                pending
                            </span>
                        )}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}