import './assets/style/style.scss';
import './assets/style/loader.scss';
import './assets/style/modal.scss';
import './assets/style/search.scss';
import {Link, Outlet} from "react-router-dom";


export default function App(props) {
    return (
        <div className="main">
            <header>
                <nav className="menu">
                    <ul>
                        {window.location.pathname == "/" ? <li onClick={() => {
                            document.querySelector(".form__group").classList.toggle("active")
                        }}>Recherche une ville</li>: <li><Link className="link" to="/">Recherche une ville</Link></li>}
                        <li><Link className="link" to="/favorite">Liste des favoris</Link></li>
                    </ul>
                </nav>
                <Outlet/>
            </header>
            <Outlet/>
        </div>
    );
}
