import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();

  // Supongamos que este es tu objeto de usuario
  const usuario = JSON.parse(localStorage.getItem('usuario'));

  const redirectToHome = () => {
    navigate('/');
  };

  const redirectToLogin = () => {
    navigate('/inicioDeSesion');
  };

  const handleLogout = () => {
    // Borrar el usuario del localStorage
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
    navigate('/inicioDeSesion');
  };
  const redirecToPilotaje = () => {
    navigate('/pilotaje');
  }

  const redirecToUsuarios = () => {
    navigate('/usuarios');
  }

  const redirecToHistorial = () => {  
    navigate('/historial');
  }

  const redirecToSolicitudes = () => {
    navigate('/solicitudes');
  }

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
          {usuario && usuario.rol === 'USER_ROL' && <li><a onClick={redirecToPilotaje} className="nav-link px-2 link-danger" style={{ cursor: 'pointer' }}>Pilotaje</a></li>}
          {usuario && usuario.rol === 'ADMIN_ROL' && (
            <>
              <li><a onClick={redirecToUsuarios} className="nav-link px-2 link-danger" style={{ cursor: 'pointer' }}>Usuarios</a></li>
              <li><a onClick={redirecToHistorial} className="nav-link px-2 link-danger" style={{ cursor: 'pointer' }}>Historial</a></li>
              <li><a onClick={redirecToSolicitudes} className="nav-link px-2 link-danger" style={{ cursor: 'pointer' }}>Solicitudes</a></li>
            </>
          )}
        </ul>

        <div className="col-md-3 text-end">
          {usuario && usuario.rol === 'USER_ROL' ? (
            <>
            </>
          ) : (
            <>
            
            <button onClick={handleLogout} type="button" className="btn btn-outline-danger me-2">Cerrar sesión</button>
            <button onClick={redirectToLogin} type="button" className="btn btn-outline-danger me-2">Inicio de sesión</button>
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default NavBar;