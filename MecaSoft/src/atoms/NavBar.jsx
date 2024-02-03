import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate('/');
  };

  const redirectToLogin = () => {
    navigate('/inicioDeSesion');
  };

  const redirectToRegister = () => {
    navigate('/registro');
  };

  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <a onClick={redirectToHome} className="d-inline-flex link-body-emphasis text-decoration-none" style={{ cursor: 'pointer' }}>
            MecaSoft
          </a>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a onClick={redirectToHome} className="nav-link px-2 link-danger" style={{ cursor: 'pointer' }}>Inicio</a></li>
          <li><a onClick={redirectToHome} className="nav-link px-2 link-danger" style={{ cursor: 'pointer' }}>Pilotaje</a></li>
          <li><a onClick={redirectToHome} className="nav-link px-2 link-danger" style={{ cursor: 'pointer' }}>Pricing</a></li>
          <li><a onClick={redirectToHome} className="nav-link px-2 link-danger" style={{ cursor: 'pointer' }}>Solicitudes</a></li>
        </ul>

        <div className="col-md-3 text-end">
          <button onClick={redirectToLogin} type="button" className="btn btn-outline-danger me-2">Inicio de sesión</button>
          <button onClick={redirectToRegister} type="button" className="btn btn-danger">Registro</button>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
