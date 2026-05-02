import Logo from "../../assets/logo.png"
import Style from "./NavBar.module.css"

export default function NavBar() {
    return (
        <>
            <nav className={`container-fluid ${Style.height}`}>
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <i className="bi bi-x fs-3 mt-4 me-4"></i>
                        <img className="w-50" src={Logo} alt="logo" />
                    </div>

                    <div className="d-flex">
                        <i className="bi bi-bell-fill fs-2 text-primary mt-4 me-4"></i>

                        <div className="dropdown">
                            <button className="btn dropdown-toggle mt-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <b>Super Admin</b>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
