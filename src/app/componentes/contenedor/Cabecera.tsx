import { NavLink } from "react-router-dom";
import miLogo from "../../../../src/assets/img/logoConciertoStar.png";

export const Cabecera = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={miLogo} alt="El logo" width="50" height="50" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Inicio
              </NavLink>
              <NavLink className="nav-link" to="*">
                Conciertos
              </NavLink>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Artistas
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/artista-crear">
                      Registrar Artistas
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/artista-listar">
                      Listar Artistas
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/artista-admin">
                      Administrar Artistas
                    </NavLink>
                  </li>
                </ul>
              </li>
              <NavLink className="nav-link" to="/acerca-de">
                Acerca De
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
