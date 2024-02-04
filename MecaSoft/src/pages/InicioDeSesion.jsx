import { useNavigate } from 'react-router-dom';
import NavBar from "../atoms/NavBar";
import "../assets/style/InicioDeSesion.css";

function InicioDeSesion() {

    const navigate = useNavigate();

    const redirectToRegister = () => {
        navigate('/registro');
      };

    return ( 
        <>
        <NavBar/>
            <div className="h-100 gradient-form divPadre">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">
                                    <div className="col-lg-6">
                                        <div className="card-body p-md-5 mx-md-4">
                                            <div className="text-center">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" width={185} alt="logo"/>
                                                <h4 className="mt-1 mb-5 pb-1">MecaSoft</h4>
                                            </div>
                                            <form className=''>
                                                <p className='text-center'>Por favor rellena los siguiente campos.</p>
                                                <div className="form-outline mb-4">
                                                    <input type="text" id="" name="text" className="inputForm" placeholder="Nombre de usuario" required/>
                                                </div>
                                                <div className="form-outline mb-5">
                                                    <input type="text" id="" name="text" className="inputForm" placeholder="Contraseña" required/>
                                                </div>
                                                {/*<div className="text-center pt-1 mb-5 pb-1">
                                                    <a className="text-muted" href="#!">Olvidaste tu contraseña?</a>
                                                </div>*/}
                                                <div className='text-center d-flex justify-content-center mt-5 mb-5'>
                                                    <div className="container-button">
                                                        <div className="hover bt-1"></div>
                                                        <div className="hover bt-2"></div>
                                                        <div className="hover bt-3"></div>
                                                        <div className="hover bt-4"></div>
                                                        <div className="hover bt-5"></div>
                                                        <div className="hover bt-6"></div>
                                                        <button className='buttonForm'></button>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <p className="mb-0 me-2">No tienes cuenta?</p>
                                                    <button onClick={redirectToRegister} type='button' className="btn btn-outline-danger">Crear cuenta</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2 red-background">
                                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                            <h4 className="mb-4">MecaSoft</h4>
                                            <p className="small mb-0">Patrocinador de exitos 20-21</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default InicioDeSesion;